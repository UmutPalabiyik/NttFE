//mui
import { Box } from "@mui/material";

//component
import MobileSearchBar from "./MobileSearchBar";
import SearhBar from "./Searchbar";
import Submenu from "./Submenu";

const Header = () => {
    return <Box>
        <Box className="md:border-b border-[#89919A] md:pb-6 xl:pb-4">
            <Box className="px-4 md:px-8 pt-6 md:pt-8 max-w-screen-2xl mx-auto">
                <Box className="flex flex-col md:flex-row justify-between gap-6 2xl:gap-[86px] max-w-screen-xl mx-auto">
                    <Box className="flex justify-between items-center">
                        <img className="w-[135px] sm:w-[170px]" src="/assets/logo.svg" alt="" />
                        <img className="w-6 h-6 md:hidden" src="./assets/hamburger.svg" alt="" />
                    </Box>

                    <MobileSearchBar />
                    <SearhBar />

                </Box>


            </Box>

        </Box>
        <Box>
            <Submenu />
        </Box>
    </Box>
}


export default Header;
