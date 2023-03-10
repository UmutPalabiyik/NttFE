import { Box } from '@mui/material'
import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Box>
        <Header />
      </Box>
    </div>
  )
}

export default App
