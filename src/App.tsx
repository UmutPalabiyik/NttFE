//mui
import { Box } from '@mui/material'

//css
import './App.css'

//components
import ProductCarousel from './components/Carousel/Carousel'
import Header from './components/Header/Header'
import Products from './components/Products/Products'

function App() {

  return (
    <div className="App">
      <Box>
        <Header />
        <ProductCarousel />
        <Products />
      </Box>
    </div>
  )
}

export default App
