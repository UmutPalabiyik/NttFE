//react
import { useState } from "react";

//mui
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, Popover, Typography, Button, TextField } from "@mui/material";

const SearhBar = () => {

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Box className="hidden md:flex gap-2.5">
            <Box className="flex border border-[#89919A] rounded ">
                <TextField className="text-[#74777A] font-medium font-['Roboto'] leading-6 flex-1 ]" placeholder="Search" sx={{
                    '& fieldset': {
                        border: 'none'
                    },
                    '& input': {
                        paddingBlock: '8.5px'
                    },
                    '& input::placeholder': {
                        color: '#74777A',
                        fontWeight: '500',
                        opacity: 1,

                    }
                }} />
                <Button className="bg-[#F4F5F6] border-none shadow-none" aria-describedby={id} variant="contained" onClick={handleClick}>
                    <span className="text-sm text-[#32363A] leading-[26px] capitalize font-['Roboto']">Categories</span>
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                </Popover>


            </Box>
            <IconButton className="bg-[#0059BC] rounded px-11" sx={{
                '& svg': {
                    color: '#ffff'
                }
            }}>
                <SearchIcon />
            </IconButton>
        </Box>
    )
}

export default SearhBar;