//mui
import { Box } from "@mui/material";

//component
import FooterSearch from "./FooterSearch";
import FooterSocials from "./FooterSocials";
import FooterLinks from "./FooterLinks";


const Footer = () => {
    return (
        <Box className="pt-12 mt-24 max-w-screen-xl mx-auto bg-[#0059BC] ">

            <Box className="flex items-center justify-between px-4 md:px-8 pb-12 border-b border-[#D9D9D9]">
                <Box className="">
                    <img src="/assets/footer_logo.svg" alt="" className="mb-9" />
                    <p className="text-white leading-[19px] font-['Roboto'] hidden md:block md:w-[345px] lg:w-[410px] mb-[56px]">Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium aliquam neque.</p>
                    <FooterSearch />
                </Box>

                <FooterLinks />
            </Box>


            <Box className="flex items-center justify-between px-4 md:px-8 py-4">
                <p className="text-xs md:text-xl text-white font-['Roboto'] leading-[14px] md:leading-[23px]">
                    contact@nttdata.com
                </p>

                <p className="text-xs md:text-xl text-white font-['Roboto'] leading-[14px] md:leading-[23px]">
                    +3 9876 765 444
                </p>

                <FooterSocials />
            </Box>
        </Box>
    )
}

export default Footer;