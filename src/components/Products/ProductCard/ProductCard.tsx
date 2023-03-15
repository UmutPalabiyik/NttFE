//react
import { useState, useRef, useEffect } from "react";

//mui
import { Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

//interface
import { ProductCardProps } from '../interface/interface';

//redux
import { useAppDispatch, useAppSelector } from "../../../utils/reduxHooks";
import { handleFavoriteProducts } from "../../../features/products/productsSlice";



const ProductCard = (props: ProductCardProps) => {
    const { id, name, description, imageUrl, price, shippingMethod } = props;

    //react
    const descriptionRef = useRef<any>(null)
    const [descriptionLinesCount, setDescriptionLinesCount] = useState(0)
    const [favoriteStatus, setFavoriteStatus] = useState(false)

    //redux
    const dispatch = useAppDispatch()
    const { favoriteProducts, products } = useAppSelector(state => state.productsSlice)

    const lineHeightLimit = 18
    const isFavorite = favoriteProducts.some((favorite: any) => favorite.id === id)

    const CardText = (props: { text: string, className?: string, ref?: any }) => <p className={`px-2 py-1 text-[#00254F] leading-4 font-["Roboto"] ${props.className}`} ref={props.ref}>{props.text}</p>

    useEffect(() => {
        const height = descriptionRef.current.offsetHeight
        setDescriptionLinesCount(height)

    }, [])

    const handleFavorite = () => {
        const _favoriteProducts = [...favoriteProducts];
        if (!isFavorite) {
            const product = products.find((item: any) => item.id === id);
            dispatch(handleFavoriteProducts([..._favoriteProducts, product]));
        } else {
            const newFavoriteProducts = _favoriteProducts.filter((product: any) => product.id !== id);
            dispatch(handleFavoriteProducts(newFavoriteProducts))
        }
    }


    /*  */



    return (
        <Box className="py-2 px-2.5 border border-[#E6E6E6] rounded relative">
            <Box className="flex items-center justify-center absolute right-[20px] top-[20px] cursor-pointer w-8 h-8 rounded-full bg-white" onClick={handleFavorite}>
                {
                    isFavorite ? <FavoriteIcon sx={{
                        '& path': {
                            color: "#c41d1d"
                        }
                    }} /> : <FavoriteBorderIcon sx={{
                        '& path': {
                            color: "#D1D1D1"
                        }
                    }} />
                }
            </Box>

            <img className='aspect-[2/1.5]' src={imageUrl} alt="" />
            <Box className="py-3">
                <CardText text={name} className="font-semibold leading-[19px]" />
                <CardText text={`${price} TL`} className="text-sm font-bold leading-4 bg-[#E6EEF8]" />
                <CardText text="Description" className="font-medium text-xs leading-[14px]" />
                <p className="px-2 pt-1 pb-0 text-[#00254F] text-xs leading-[14px] line-clamp-2 overflow-hidden text-ellipsis" ref={descriptionRef} >{description}</p>
                {
                    descriptionLinesCount > lineHeightLimit && <p className="px-2 text-xs text-[#0059BC] font-medium leading-[14px] italic cursor-pointer">devamı gör</p>
                }
                <CardText text={shippingMethod} className='text-[#000000] text-[10px] leading-3 pt-2' />

            </Box>
        </Box>
    )

}

export default ProductCard;