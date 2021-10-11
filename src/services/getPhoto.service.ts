export class GetPhotoService {
    constructor(){};
    public getPhoto(): Promise<any>{
        return fetch('https://picsum.photos/300',{
            method: 'GET'
        })        
    }

    public getPhotos(page: number, limit: number): Promise<any>{
        return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    }
}