//mui
import { Box } from '@mui/material'

const FooterSocials = () => {

    const socials = [{
        link: "https://www.instagram.com",
        src: "/assets/instagram_icon.svg"

    },
    {
        link: "https://www.facebook.com",
        src: "/assets/facebook_icon.svg"

    },
    {
        link: "https://www.linkedin.com/feed/",
        src: "/assets/linkedin_icon.svg"

    }]

    return (
        <Box className="hidden md:flex items-center gap-6">
            {
                socials.map(({ link, src }) => <a href={link}><img src={src} alt="" /></a>)
            }
        </Box>
    )
}

export default FooterSocials;