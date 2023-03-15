//mui
import { Box } from '@mui/material'

//component
import CloseIcon from '@mui/icons-material/Close';

const MobileMenu = (props: any) => {
    const { setIsMobileMenuOpen } = props;
    const categories = ["Category Name", "Category Name", "Category Name", "Category Name"];

    return (
        <Box className="flex flex-col md:hidden fixed left-0 top-0 px-4 md:px-8 pt-6 md:pt-8  bg-white w-full h-screen z-50">
            <Box className="flex justify-between items-center">
                <img className="w-[135px] sm:w-[170px]" src="/assets/logo.svg" alt="" />
                <CloseIcon onClick={() => setIsMobileMenuOpen(false)}/>
            </Box>
            <Box className="flex flex-col gap-y-4 pt-10">
                {
                    categories.map((category: string) => {
                        return <a className='text-[#000000] text-2xl leading-7 font-medium font-["Roboto"]' href={`/${category}`}>{category}</a>
                    })
                }
            </Box>

        </Box>
    )
}

export default MobileMenu;