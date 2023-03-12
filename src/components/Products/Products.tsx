//react
import { useEffect } from 'react';

//mui
import { Box } from '@mui/material'

//components
import ProductsHeader from './ProductsHeader';
import ProductCard from './ProductCard/ProductCard';

//redux
import { useAppDispatch, useAppSelector } from '../../utils/reduxHooks';
import { getProducts } from '../../features/products/productsActions';

const Products = () => {

    const dispatch = useAppDispatch()
    const { products } = useAppSelector(state => state.productsSlice)

    console.log("productsproducts ==>", products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])


    return <Box className="px-4 md:px-8 xl:px-0 max-w-screen-xl mx-auto">
        <ProductsHeader />
        <Box className="pt-6 mx-auto container grid grid-cols-1 xs:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                products.map((product: any) => {
                    const { id, name, description, imageUrl, price, shippingMethod } = product
                    return <ProductCard id={id} name={name} description={description} imageUrl={imageUrl} price={price} shippingMethod={shippingMethod} />
                })
            }
        </Box>

    </Box>

}

export default Products;