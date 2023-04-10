import {BrowserRouter as  Router,Route,Routes} from 'react-router-dom'
import Header from '../components/Header/Header'
import One from '../Pages/one/One'
import Two from '../Pages/two/Two'
import Three from '../Pages/three/Three'
import Hello from '../Pages/Hello/Hello'

function MainRoute() {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Hello/>}/>
          <Route path='/one' element={<One/>}/>
          <Route path='/two' element={<Two/>}/>
          <Route path='/three' element={<Three/>}/>
        </Routes>
      </Router>
  )
}

export default MainRoute