import React,{ useState } from 'react'
import './App.scss'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import One from './Pages/one/One'

function App() {
  return (
    <div className="App">
        <div className="crop">
          <div className="sec sec1 flex">
            <h1>Welcome im Dose</h1>
          </div>
          <div className="sec sec2">
            <One/>
          </div>
          <div className="sec sec3">

          </div>
        </div>
    </div>
  )
}
export default App
