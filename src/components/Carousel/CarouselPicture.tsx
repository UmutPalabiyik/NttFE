import { CarouselPictureType } from "./interface";

const CarouselPicture = (props: CarouselPictureType) => {
    const { mobileSrc, tabletSrc, desktopSrc, defaultSrc } = props;
    return (
        <picture>
            <source media="(max-width: 480px)" srcSet={mobileSrc} className="max-h-[450px]" />
            <source media="(max-width: 768px)" srcSet={tabletSrc} className="max-h-[450px]" />
            <source media="(min-width: 769px)" srcSet={desktopSrc} className="max-h-[450px]" />
            <img src={defaultSrc} className="max-h-[450px]" alt="Product" />
        </picture>
    )
}

export default CarouselPicture;