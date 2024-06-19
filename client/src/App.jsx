import {Route, Routes} from 'react-router-dom'

//Importando vistas
import Home from './views/Home'
import Login from './views/Login'
import NotFound from './views/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
