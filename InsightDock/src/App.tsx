import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/electron-vite.animate.svg'
import { Routes, Route} from 'react-router-dom';
import Login from './renderer/components/Auth/Login';


function App() {


  return (
    <>
      <Login/>
    </>
  )
}

export default App