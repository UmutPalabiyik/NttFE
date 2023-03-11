//redux
import { createAsyncThunk } from "@reduxjs/toolkit";

//services
import ApiService from "../../services/BaseService";

const apiService  = new ApiService();



export const getProducts = createAsyncThunk('getProducts',async (_, { rejectWithValue}) => {

    try {
        const response = await apiService.get('/products')
        console.log("response ==>", response)

        return response
    } catch (error) {
        return rejectWithValue(error);
    }

})