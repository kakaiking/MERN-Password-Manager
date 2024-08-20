import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreatePassword from './pages/CreatePassword'
import ShowPassword from './pages/ShowPassword'
import EditPassword from './pages/EditPassword'
import DeletePassword from './pages/DeletePassword'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/passwords/create' element={<CreatePassword/>}></Route>
      <Route path='/passwords/details/:id' element={<ShowPassword/>}></Route>
      <Route path='/passwords/edit/:id' element={<EditPassword/>}></Route>
      <Route path='/passwords/delete/:id' element={<DeletePassword/>}></Route>
    </Routes>
  )
}

export default App
