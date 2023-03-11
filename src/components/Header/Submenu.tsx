//react
import { useState } from "react";

//mui
import { Box, Button, Popover, useMediaQuery } from "@mui/material";

//component
import SubmenuItem from "./SubmenuItem";



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



    const menu = [{
        title: "Menu Item",
        submenu: [
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            },
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            }
        ]
    },
    {
        title: "Menu Item",
        submenu: [
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            },
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            }
        ]
    },
    {
        title: "Menu Item",
        submenu: [
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            },
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            }
        ]
    }, {
        title: "Menu Item",
        submenu: [
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            },
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            }
        ]
    }, {
        title: "Menu Item",
        submenu: [
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            },
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            }
        ]
    }, {
        title: "Menu Item",
        submenu: [
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            },
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            }
        ]
    }, {
        title: "Menu Item",
        submenu: [
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            },
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            }
        ]
    }, {
        title: "Menu Item",
        submenu: [
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            },
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            }
        ]
    }, {
        title: "Menu Item",
        submenu: [
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            },
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            }
        ]
    }, {
        title: "Menu Item",
        submenu: [
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            },
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            }
        ]
    }, {
        title: "Menu Item",
        submenu: [
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            },
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            }
        ]
    }, {
        title: "Menu Item",
        submenu: [
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            },
            {
                title: "Header",
                menu: ["Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader", "Subheader"]
            }
        ]
    },
    ]


    return (
        <Box className="px-4 md:px-8 xl:px-0 max-w-screen-xl mx-auto">
            <Box className="flex justify-between pb-2.5 pt-6">
                {
                    isDesktop ? (
                        menu.map(({ title, submenu }, key) => <SubmenuItem title={title} submenu={submenu} key={key} />)


                    ) : isTablet ? (
                        <Box className="flex justify-between items-center w-full ">
                            {
                                menu.slice(0, 6).map(({ title, submenu }) => <SubmenuItem title={title} submenu={submenu} />)
                            }
                            <Box>
                                <Button className="flex items-center gap-2 border-none shadow-none bg-transparent py-0 pb-3" aria-describedby={id} variant="contained" onClick={handleClick}>
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
                                    <Box className="flex flex-col gap-y-2.5 bg-[#F4F5F6] p-3 ">
                                        {menu.slice(6).map(({ title }, key) => (
                                            <p className="text-sm text-[#6A6D70] font-medium font-['Roboto'] leading-4" key={key}>
                                                {title}
                                            </p>
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