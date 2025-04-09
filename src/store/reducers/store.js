import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./ProductReducer";

export const store = configureStore({
    reducer: {},
    preloadedState: {
        product: productReducer,
    },
})

export default store;