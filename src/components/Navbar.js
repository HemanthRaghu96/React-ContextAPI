import React, { useContext } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Body from './Body'
import CartDetailes from './CartDetailes'
import { Context } from './UserProvider'

const Navbar = () => {
  const navigate=useNavigate()
  const { filterId } = useContext(Context);
  return (
    <header>
    <nav className='bg-black text-white flex justify-center sticky'>
        <button className='bg-white text-black p-3 m-3 px-6' onClick={()=>navigate('/')}>Home</button>
        <button className='bg-white text-black p-3 m-3 px-6' onClick={()=>navigate('/cart')}>
        Cart {filterId.length >= 0 && <span>({filterId.length})</span>}
        </button>
    </nav>
    <Routes>
      <Route path='/' element={<Body />} />
      <Route path='/cart' element={<CartDetailes />} />
    </Routes>
    </header>
  )
}

export default Navbar