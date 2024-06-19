import {Route, Routes} from 'react-router-dom'

//Importando vistas
import Home from './views/Home'
// import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
