import {BrowserRouter as  Router,Route,Routes} from 'react-router-dom'
import Header from '../components/Header/Header'
import { lazy , Suspense } from 'react'
const Hello = lazy(()=> import('../Pages/Hello/Hello'))
const One = lazy(()=> import('../Pages/one/One'))
const Two = lazy(()=> import('../Pages/two/Two'))
const Three = lazy(()=> import('../Pages/three/Three'))

function MainRoute() {
  return (
    <Router>
        <Suspense fallback={<h1>Loading....</h1>}>
          <Header/>
          <Routes>
            <Route path='/' element={<Hello/>}/>
            <Route path='/one' element={<One/>}/>
            <Route path='/two' element={<Two/>}/>
            <Route path='/three' element={<Three/>}/>
          </Routes>
        </Suspense>
      </Router>
  )
}

export default MainRoute