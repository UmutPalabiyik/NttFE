//mui
import { Box } from "@mui/material";

const CategoriesPopoverContent = () => {


    const categories = ["Category Name", "Category Name", "Category Name", "Category Name"]

    return (
        <Box className="flex flex-col w-[156px] p-3 bg-[#00254F] rounded  gap-y-1 ">
            <p className="text-sm text-white font-['Roboto'] leading-[26px] py-1 px-2 rounded-sm">Data</p>
            {
                categories.map((category: string, key) => <a className="text-sm text-white font-['Roboto'] py-1 px-2 rounded-sm leading-[26px] hover:bg-[#0059BC]" key={key}>{category}</a>)
            }
        </Box>
    )
}

export default CategoriesPopoverContent;