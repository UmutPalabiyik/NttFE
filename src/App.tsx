import { Box } from '@mui/material'
import { useState } from 'react'

import './App.css'
import ProductCarousel from './components/Carousel/Carousel'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Box>
        <Header />
        <ProductCarousel />
      </Box>
    </div>
  )
}

export default App
