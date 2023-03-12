//mui
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box } from "@mui/material";

//redux
import { useAppSelector } from '../../utils/reduxHooks';

const FavoritesCount = () => {

    const { favoriteProducts } = useAppSelector(state => state.productsSlice)

    return (
        <Box className="flex items-center gap-x-2">
            <FavoriteBorderIcon />
            <p className="text-[#000000] text-base font-medium font-['Roboto'] leading-[19px]">{favoriteProducts.length} ÜRÜN</p>
        </Box>
    )
}


export default FavoritesCount;