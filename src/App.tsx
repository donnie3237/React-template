import { useState } from 'react'
import './App.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainRoute from './Routes/MainRoute';

function App() {
  return (
    <div className="App">
      <MainRoute/>
      <ToastContainer position='bottom-right'/>
    </div>
  )
}

export default App
