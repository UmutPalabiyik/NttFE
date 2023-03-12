//redux
import { createSlice } from "@reduxjs/toolkit";


//actions
import { getProducts } from "./productsActions";

const initialState = {
    products: [] as any,
    favoriteProducts: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        handleFavoriteProducts: (state, { payload }) => {
            state.favoriteProducts = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.products = payload.data
        })
    }
});




export default productsSlice.reducer;
export const { handleFavoriteProducts } = productsSlice.actions