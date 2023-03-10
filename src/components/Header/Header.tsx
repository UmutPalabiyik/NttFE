//mui
import { Box } from "@mui/material";

//component
import MobileSearchBar from "./MobilSearchbar";
import SearhBar from "./Searchbar";

const Header = () => {
    return <Box className="px-4 md:px-8 pt-6 md:pt-8">
        <Box className="flex flex-col md:flex-row justify-between gap-6">
            <Box className="flex justify-between items-center">
                <img className="w-[135px] sm:w-[170px]" src="/assets/logo.svg" alt="" />
                <img className="w-6 h-6 md:hidden" src="./assets/hamburger.svg" alt="" />
            </Box>

            <MobileSearchBar />
            <SearhBar />

        </Box>


    </Box>
}


export default Header;
