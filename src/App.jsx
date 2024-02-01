import React from 'react'
import { Link } from 'react-router-dom';
import './App.css'
const App = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-item'>
    <Link to="/products" className='btn btn-info'>Products page</Link>
    <Link to="/brands" className='btn btn-info'>Brands page</Link>
    <Link to="/models" className='btn btn-info'>Models page</Link>
      </div>
    </div>
  )
}

export default App
