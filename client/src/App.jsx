import {Route, Routes} from 'react-router-dom'

//Importando vistas
import Home from './views/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' Component={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
