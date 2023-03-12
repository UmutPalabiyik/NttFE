//mui
import { Box, Button } from "@mui/material";

//component
import FavoritesCount from "./FavoritesCount";

//redux
import { useAppDispatch, useAppSelector } from "../../utils/reduxHooks";
import { handleProductsToBeRenderStatus } from "../../features/products/productsSlice";

const ProductsHeader = () => {



    //redux
    const dispatch = useAppDispatch()
    const { productsToBeRenderStatus } = useAppSelector(state => state.productsSlice)

    const handleClick = () => {
        dispatch(handleProductsToBeRenderStatus(!productsToBeRenderStatus))
    }


    return (
        <Box className="flex flex-col gap-y-4 xs:flex-row justify-between items-center pt-12">
            <p className="text-[#000000] text-base md:text-2xl 2xl:text-[2rem] font-medium font-['Roboto'] leading-[19px] self-start xs:self-center">Content title goes here</p>
            <Box className="flex items-center justify-between w-full xs:w-auto  gap-x-3" onClick={handleClick}>
                <FavoritesCount />
                <button className="py-1 px-2 text-white text-base bg-[#0059BC] rounded capitalize font-normal font-['Roboto']">{productsToBeRenderStatus ? "Tüm Ürünler" : "Beğenilenler"}</button>
            </Box>
        </Box>
    )
}



export default ProductsHeader;