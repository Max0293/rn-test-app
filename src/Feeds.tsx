import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, FlatList, SafeAreaView, Text } from 'react-native';
import { GetPhotoService } from './services/getPhoto.service';

export interface Photo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export const Feeds = () => {
  const [photos, setPhotos] = useState([] as Photo[]);
  const getPhotoService = new GetPhotoService();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    loadPhotos(pageNumber);
  }, []);

  const loadPhotos = (page: number) => {
    getPhotoService.getPhotos(page, 10)
    .then(res => res.json())
    .then((data: Photo[]) => {
      const ph = [...photos, ...data];
      setPhotos(ph);
    })
    .catch(err => console.error(err));
  }
  
  const renderNewPage = () => {
    setPageNumber(pageNumber+1);
    loadPhotos(pageNumber + 1);
  };

  const photoItem = ({item}: {item: Photo}) => {
    return (
        <Image style={styles.image} source={{uri:item.download_url}}></Image>
    );
  };

    return (
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={photos}
          renderItem={photoItem}
          keyExtractor={item => item.id}
          onEndReached={renderNewPage}
          onEndReachedThreshold={1}
        />
        <Text>Pages loaded: {pageNumber}</Text>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      padding: 10,
      width: 100,
      height: 100,
      margin: 5
    }
  });
  