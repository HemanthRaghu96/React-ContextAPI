import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Body from './Body'
import CartDetailes from './CartDetailes'

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <header>
    <nav className='bg-black text-white flex justify-center sticky'>
        <button className='bg-white text-black p-3 m-3 px-6' onClick={()=>navigate('/')}>Home</button>
        <button className='bg-white text-black p-3 m-3 px-6' onClick={()=>navigate('/cart')}>Cart</button>
    </nav>
    <Routes>
      <Route path='/' element={<Body />} />
      <Route path='/cart' element={<CartDetailes />} />
    </Routes>
    </header>
  )
}

export default Navbar