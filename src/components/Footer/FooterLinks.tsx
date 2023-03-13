//mui
import { Box } from '@mui/material'

const FooterLinks = () => {

    const links = [
        {
            title: "Title",
            subTitles: ["Subtitle", "Subtitle", "Subtitle", "Subtitle"]
        },
        {
            title: "Title",
            subTitles: ["Subtitle", "Subtitle", "Subtitle", "Subtitle"]
        },
        {
            title: "Title",
            subTitles: ["Subtitle", "Subtitle", "Subtitle", "Subtitle"]
        }
    ]



    return (
        <Box className="hidden md:flex items-center gap-16 xl:gap-36">
            {
                links.map(({ title, subTitles }) => {
                    return <Box>
                        <p className='text-white text-xl font-["Roboto"] font-medium leading-[23px] mb-6'>{title}</p>
                        <Box className="flex flex-col gap-y-3">
                            {
                                subTitles.map((subtitle, key) => {
                                    return <a className='text-white text-xl font-normal font-["Roboto"] leading-[23px]' href={subtitle} key={key}>{subtitle}</a>
                                })
                            }
                        </Box>

                    </Box>
                })
            }
        </Box>
    )
}

export default FooterLinks;