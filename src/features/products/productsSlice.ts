//redux
import { createSlice } from "@reduxjs/toolkit";


//actions
import { getProducts } from "./productsActions";

const initialState = {
    products: [] as any
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.products = payload.data
        })
    }
});




export default productsSlice.reducer;