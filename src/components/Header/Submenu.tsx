//react
import { useState } from "react";

//mui
import { Box, useMediaQuery, Grid, Button, Popover } from "@mui/material";


const Submenu = () => {

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    const isDesktop = useMediaQuery('(min-width:1440px)')
    const isTablet = useMediaQuery('(min-width:768px)')

    const menu = [
        "Menu Item",
        "Menu Item",
        "Menu Item",
        "Menu Item",
        "Menu Item",
        "Menu Item",
        "Menu Item",
        "Menu Item",
        "Menu Item",
        "Menu Item",
        "Menu Item",
        "Menu Item",
    ]


    console.log("asdas ==>", isDesktop)
    return (
        <Box className="px-4 md:px-8 xl:px-0 max-w-screen-xl mx-auto">
            <Box className="flex justify-between">
                {
                    isDesktop ? (
                        menu.map((item) => {
                            return <p className="text-sm text-[#6A6D70] font-medium font-['Roboto'] py-6">{item}</p>
                        })


                    ) : isTablet ? (
                        <Box className="flex justify-between items-center w-full">
                            {
                                menu.slice(0, 6).map((item) => {
                                    return (
                                        <>
                                            <p className="text-sm text-[#6A6D70] font-medium font-['Roboto'] py-6">{item}</p>

                                        </>
                                    )
                                })
                            }
                            <Box >
                                <Button className="flex items-center gap-2 border-none shadow-none bg-transparent " aria-describedby={id} variant="contained" onClick={handleClick}>
                                    <span className="text-sm text-[#6A6D70] leading-4 capitalize font-roboto">More</span>
                                    <img src="./assets/expand_more.svg " alt="" />
                                </Button>
                                <Popover
                                    open={Boolean(anchorEl)}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                >
                                    <Box >
                                        {menu.slice(6).map((item, key) => (
                                            <Box key={key}>
                                                {item}
                                            </Box>
                                        ))}
                                    </Box>
                                </Popover>
                            </Box>
                        </Box>

                    ) : null
                }
            </Box>


        </Box>
    )
}

export default Submenu;