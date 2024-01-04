import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';
//cartSlice.reducer
import cartSliceReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';

// combines reducers, adds middleware, and enables DevTools for easier development and debugging
const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartSliceReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})

export default store;