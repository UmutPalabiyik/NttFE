//mui
import { Box, TextField, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const MobileSearchBar = () => {
    return (
        <Box className="flex border border-[#89919A] rounded p-0 md:hidden" >
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
            <IconButton className="bg-[#0059BC] rounded-none px-11" sx={{
                '& svg': {
                    color: '#ffff'
                }
            }}>
                <SearchIcon />
            </IconButton>
        </Box>
    )
}

export default MobileSearchBar;