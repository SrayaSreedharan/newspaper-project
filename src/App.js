// import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Bussinessnews from './pages/Bussinessnews'
import Entertainmentnews from './pages/Entertainmentnews'
import Generalnews from './pages/Generalnews'
import Healthnews from './pages/Healthnews'
import Nationalnews from './pages/Nationalnews'
import Sciencenews from './pages/Sciencenews'
import Sportsnews from './pages/Sportsnews'
import Technologynews from './pages/Technologynews'
import Worldnews from './pages/Worldnews'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'

function App() {
//   const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/buisness' element={<Bussinessnews/>}/>
        <Route path='/entertainment' element={<Entertainmentnews/>}/>
        <Route path='/general' element={<Generalnews/>}/>
        <Route path='/health' element={<Healthnews/>}/>
        <Route path='/nation' element={<Nationalnews/>}/>
        <Route path='/science' element={<Sciencenews/>}/>
        <Route path='/sports' element={<Sportsnews/>}/>
        <Route path='/technology' element={<Technologynews/>}/>
        <Route path='/world' element={<Worldnews/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        

      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
