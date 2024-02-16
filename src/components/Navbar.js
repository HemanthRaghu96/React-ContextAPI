// Importing necessary modules from React Router DOM
import React, { useContext } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
// Importing components: Body and CartDetails
import Body from './Body'
import CartDetailes from './CartDetailes'
// Importing the Context from './UserProvider'
import { Context } from './UserProvider'
// Defining the Navbar component as a functional component
const Navbar = () => {
  // Initializing the navigate function from useNavigate hook
  const navigate=useNavigate()
  
  // Accessing the filterId from the context
  const { filterId } = useContext(Context);
   // Rendering the JSX content
  return (
    <header>
     {/* Navigation bar */}
    <nav className='bg-black text-white flex justify-center sticky'>
     {/* Home button */}
        <button className='bg-white text-black p-3 m-3 px-6' onClick={()=>navigate('/')}>Home</button>
         {/* Cart button with count of items */}
        <button className='bg-white text-black p-3 m-3 px-6' onClick={()=>navigate('/cart')}>
        Cart {filterId.length >= 0 && <span>({filterId.length})</span>}
        </button>
    </nav>
      {/* Routing setup */}
    <Routes>
     {/* Route for home page */}
      <Route path='/' element={<Body />} />
         {/* Route for cart page */}
      <Route path='/cart' element={<CartDetailes />} />
    </Routes>
    </header>
  )
}

export default Navbar