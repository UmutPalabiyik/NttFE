//react
import { useEffect } from 'react';

//mui
import { Box } from '@mui/material'

//components
import ProductsHeader from './ProductsHeader';

//redux
import { useAppDispatch } from '../../utils/reduxHooks';
import { getProducts } from '../../features/products/productsActions';

const Products = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])


    return <Box className="px-4 md:px-8 xl:px-0 max-w-screen-xl mx-auto">
        <ProductsHeader />
    </Box>

}

export default Products;