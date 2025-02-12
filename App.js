import React from 'react'
import { BrowserRouter , Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Classroom from './pages/Classroom'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/Classroom' element={<Classroom/>}/>
      <Route path='/Store' element={<Store/>}/>
      <Route path='/Blog' element={<Blog/>}/>
  
    </Routes>
    </BrowserRouter>
    
  )
}

export default App