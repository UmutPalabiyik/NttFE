//mui
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box } from "@mui/material";

const FavoritesCount = () => {

    const favoritesCount = 0
    return (

        <Box className="flex items-center gap-x-2">
            <FavoriteBorderIcon />
            <p className="text-[#000000] text-base font-medium font-['Roboto'] leading-[19px]">{favoritesCount} ÜRÜN</p>
        </Box>
    )
}


export default FavoritesCount;