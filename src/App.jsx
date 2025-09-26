import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Project from './pages/Project'

const App = () => {
  return (
    <div className='min-w-screen min-h-screen bg-zinc-800 text-zinc-100'>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/agence' element={<Agence/>} />
          <Route path='/project' element={<Project/>} />
      </Routes>
    </div>
  )
}

export default App