import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Cardus from './components/Cardus/Cardus'


function App() {
  const isUs = false;
  return (
    <>
    <div className='card-container'> 
    <Card /> 
    <Cardus/>
    </div>
   
    </>
  )
}

export default App
