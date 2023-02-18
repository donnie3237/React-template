import React from 'react'
import { toast } from 'react-toastify'
import './Hello.scss'

function Hello() {
  return (
    <div className='hello flex'> 
        <h1>Hello</h1> 
        <button onClick={()=>{toast.success('hello')}}>hi</button>
    </div>
  )
}

export default Hello