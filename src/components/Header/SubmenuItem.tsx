//react
import { useState, useRef, useEffect } from "react";

//mui
import { Typography, Popover } from "@mui/material";

//interfaces
import { SubmenuItemProps } from "./interface/interface";

//component
import SubmenuItemPopoverContent from "./SubmenuItemPopoverContent";


const SubmenuItem = (props: SubmenuItemProps) => {

    const popperRef = useRef<any>(null)
    const { title, submenu } = props;

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);


    return (
        <div>
            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                /* onMouseLeave={handlePopoverClose} */
                className="text-sm text-[#6A6D70] font-medium font-['Roboto'] pb-2.5 leading-4 border-b-2 border-[transparent] hover:border-[#0059BC]"
            >
                {title}
            </Typography>
            <Popover
                className="test123"
                ref={popperRef}
                id="mouse-over-popover"
/*                 sx={{
                    pointerEvents: 'none',
                }} */
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
                disablePortal
            >
                <SubmenuItemPopoverContent submenu={submenu} handlePopoverClose={handlePopoverClose}/>
            </Popover>
        </div>
    );
}



export default SubmenuItem;