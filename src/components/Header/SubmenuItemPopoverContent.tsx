//mui
import { Box } from "@mui/material";

//interface
import { SubmenuItemPopoverContentProps } from "./interface/interface";

const SubmenuItemPopoverContent = (props: SubmenuItemPopoverContentProps) => {

    const { submenu, handlePopoverClose } = props;
    return (
        <Box className="flex gap-10 py-[30px] px-12 bg-[#F4F5F6] rounded-[1px] max-w-screen-2xl" onMouseLeave={handlePopoverClose} >
            {
                submenu?.map(({ title, menu }: { title?: string, menu?: string[] }, key) => {
                    return (
                        <Box key={key}>
                            <p className="text-[#000000] text-sm font-['Roboto'] font-medium leading-4 mb-3">{title}</p>
                            <Box className="flex flex-col gap-3">
                                {
                                    menu?.map((item: string) => {
                                        return <p className="text-[#000000] text-sm font-['Roboto'] leading-4">{item}</p>
                                    })
                                }
                            </Box>
                        </Box>
                    )
                })
            }

            <img src="/assets/submenu-photo.png" alt="" />

        </Box>
    )
};

export default SubmenuItemPopoverContent;