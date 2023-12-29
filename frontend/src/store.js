import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';

//cartSlice.reducer
import cartSliceReducer from './slices/cartSlice';

// combines reducers, adds middleware, and enables DevTools for easier development and debugging
const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})

export default store;