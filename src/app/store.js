import {configureStore} from '@reduxjs/toolkit'
import cakeReducer from './features/cakes/CakeSlice';
import icecreamReducer from './features/IceCream/IceCreamSlice';

const store = configureStore({
    reducer:{
            cake: cakeReducer,
            IceCream: icecreamReducer
    }

})

export default store;