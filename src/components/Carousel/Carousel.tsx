//mui
import { Box } from "@mui/material";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

//component
import CarouselPicture from "./CarouselPicture";


const ProductCarousel = () => {



    const carouselItems = [{
        mobileSrc: "assets/product-mobile.png",
        tabletSrc: "assets/product-tablet.png",
        desktopSrc: "assets/product-desktop.png",
        defaultSrc: "assets/product-desktop.png"
    },
    {
        mobileSrc: "assets/product-mobile.png",
        tabletSrc: "assets/product-tablet.png",
        desktopSrc: "assets/product-desktop.png",
        defaultSrc: "assets/product-desktop.png"
    },
    {
        mobileSrc: "assets/product-mobile.png",
        tabletSrc: "assets/product-tablet.png",
        desktopSrc: "assets/product-desktop.png",
        defaultSrc: "assets/product-desktop.png"
    },
    {
        mobileSrc: "assets/product-mobile.png",
        tabletSrc: "assets/product-tablet.png",
        desktopSrc: "assets/product-desktop.png",
        defaultSrc: "assets/product-desktop.png"
    }]



    return (
        <Box className="relative pt-9 md:pt-0" sx={{
            '& .legend': {
                display: 'none'
            },
            '& .control-dots': {
                marginBlock: '17px',
                width: 'auto',
                right: '1.5rem'
            },
            '& .control-dots img': {
                width: "10px",
                height: "10px"
            }
        }}>
            <Carousel showArrows={false} showStatus={false} showThumbs={false} renderIndicator={(onClickHandler, isSelected, index, label) => {
                const defStyle = { marginLeft: 20, color: "white", cursor: "pointer" };
                const style = isSelected
                    ? { ...defStyle, color: "red" }
                    : { ...defStyle };
                return (
                    <span
                        style={style}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        aria-label={`${label} ${index + 1}`}
                    >
                        {
                            isSelected ? <img src="assets/selected-carousel.svg" /> : <img src="assets/unselected-carousel.svg" />
                        }
                    </span>
                );
            }} className="max-h-[450px] max-w-screen-xl mx-auto">
                {
                    carouselItems.map((item) => {
                        const { mobileSrc, tabletSrc, desktopSrc, defaultSrc } = item
                        return <CarouselPicture mobileSrc={mobileSrc} tabletSrc={tabletSrc} desktopSrc={desktopSrc} defaultSrc={defaultSrc} />
                    })
                }
            </Carousel>
            <Box className="absolute bottom-0 left-[50%] translate-x-[-50%] w-full h-[58px] max-w-screen-xl bg-[#00000066] backdrop-opacity-40"></Box>
        </Box>

    );

};

export default ProductCarousel;