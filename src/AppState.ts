import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import { useSelector, useDispatch } from 'react-redux';
import thunk from 'redux-thunk';

export interface ReducerAction {
  type: 'Is Logged In' | 'Log In' | 'Log Out';
  payload: any;
}

function reducers(state = {}, action: any): any{
    switch(action.type) {
      case 'Is Logged In':
        return {
          ...state
        };
      case 'Log In':
        return {
          ...state,
          loggedIn: true,
          email: action.payload.email
        };
      case 'Log Out':
        return {
          ...state,
          loggedIn: false,
          email: null
        };
      default:
        return state;
    }
  };

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

const rootReducer = combineReducers({
  state: persistReducer(persistConfig, reducers)
});

export const state = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(state);