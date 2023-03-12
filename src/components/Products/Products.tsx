//react
import { useEffect, useState } from 'react';

//mui
import { Box, Button } from '@mui/material'
import EastIcon from '@mui/icons-material/East';

//components
import ProductsHeader from './ProductsHeader';
import ProductCard from './ProductCard/ProductCard';

//redux
import { useAppDispatch, useAppSelector } from '../../utils/reduxHooks';
import { getProducts } from '../../features/products/productsActions';

const Products = () => {
    const [displayLimit, setDisplayLimit] = useState(4)

    const dispatch = useAppDispatch()
    const { products } = useAppSelector(state => state.productsSlice)

    const handleDisplayLimit = () => {
        setDisplayLimit(displayLimit + 4)
    }


    useEffect(() => {
        dispatch(getProducts())
    }, [])


    return <Box className="px-4 md:px-8 xl:px-0 max-w-screen-xl mx-auto">
        <ProductsHeader />
        <Box className="pt-6 mx-auto container grid grid-cols-1 xs:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                products.slice(0, displayLimit).map((product: any, key: any) => {
                    const { id, name, description, imageUrl, price, shippingMethod } = product
                    return <ProductCard id={id} name={name} description={description} imageUrl={imageUrl} price={price} shippingMethod={shippingMethod} key={key} />
                })
            }
        </Box>

        <Box className="flex justify-center mt-[38px]">
            <Button className='py-4 px-6 font-normal font-["Roboto"] text-xl leading-[23px] text-white bg-[#0059BC] rounded normal-case' endIcon={<EastIcon />} onClick={handleDisplayLimit}>
                Daha fazla
            </Button>
        </Box>


    </Box>

}

export default Products;