//mui
import { Box, Button, TextField } from '@mui/material'

//component
import SearchIcon from '@mui/icons-material/Search';

const FooterSearch = () => {
    return (
        <Box className="flex p-0 w-[275px] md:w-[345px] lg:w-[410px]" >
            <TextField className="bg-white text-[#000000] font-['Roboto'] leading-[19px] flex-1" placeholder="Email" sx={{
                '& fieldset': {
                    border: 'none'
                },
                '& input': {
                    paddingBlock: '8.5px'
                },
                '& input::placeholder': {
                    color: '#000000',
                    fontWeight: '500',
                    opacity: 1,

                }
            }} />
            <Button className='py-2.5 px-6 bg-[#00254F] rounded-none'><span className='text-white text-base leading-[19px] font-["Roboto"] font-normal capitalize'>Sign Up</span></Button>
        </Box>)
}

export default FooterSearch;