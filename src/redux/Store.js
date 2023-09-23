//import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer';

//export const Store = createStore(
export const Store = configureStore({    
    reducer:rootReducer,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
}
)