import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

export default () => {
   return (
    <Router>
        <Route exact  path="/" element={<Home />} />
        <Route exact  patch="/about" element={<about />} />
    </Router>

   )
}