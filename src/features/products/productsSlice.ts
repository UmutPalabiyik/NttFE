//redux
import { createSlice } from "@reduxjs/toolkit";


//actions
import { getProducts } from "./productsActions";

const initialState = {
    products: [] as any,
    favoriteProducts: [],
    productsToBeRenderStatus: false
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        handleFavoriteProducts: (state, { payload }) => {
            state.favoriteProducts = payload
        },
        handleProductsToBeRenderStatus: (state, { payload }) => {
            state.productsToBeRenderStatus = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.products = payload.data
        })
    }
});




export default productsSlice.reducer;
export const { handleFavoriteProducts, handleProductsToBeRenderStatus } = productsSlice.actions