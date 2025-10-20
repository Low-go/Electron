import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/electron-vite.animate.svg'
import './App.css'
import { Routes, Route} from 'react-router-dom';
import Sidebar from './renderer/components/Layout/Sidebar';
import { Box, useBreakpointValue } from '@chakra-ui/react'

const smVariant = { navigation: 'drawer' as const, navigationButton: true }
const mdVariant = { navigation: 'sidebar' as const, navigationButton: false }

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant })

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

  return (
    <>
      <Sidebar
        variant={variants?.navigation || 'drawer'}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
    </>
  )
}

export default App