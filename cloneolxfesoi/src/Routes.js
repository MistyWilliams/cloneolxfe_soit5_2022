import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Signin from './pages/Signin'

export default () => {
   return (
    <Routes>
        <Route exact  path="/" element={<Home />} />
        <Route exact  patch="/about" element={<about />} />
        <Route exact  patch="/signin" element={<Signin />} />
        <Route path='*'element={<notFound />} />
    </Routes>

   )
}