import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/componnets/navbar'
import ContentCard from './assets/componnets/contentcard'
import Contentcontainer from './assets/componnets/contentcontainer'
import Billboard from './assets/componnets/billboard'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
        <Navbar/>
        <Billboard/>
        <Routes>


        <Route  path='/:catogery'   Component={Contentcontainer} />


</Routes>
     

     
     
        </div>
    </>
  )
}

export default App
