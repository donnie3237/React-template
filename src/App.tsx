import { useState } from 'react'
import './App.scss'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header'
import {BrowserRouter as  Router,Route,Routes} from 'react-router-dom'
import One from './Pages/one/One'
import Two from './Pages/two/Two'
import Three from './Pages/three/Three'
import Hello from './Pages/Hello/Hello'
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Hello/>}/>
          <Route path='/one' element={<One/>}/>
          <Route path='/two' element={<Two/>}/>
          <Route path='/three' element={<Three/>}/>
        </Routes>
      </Router>
      <ToastContainer position='bottom-right'/>
    </div>
  )
}

export default App
