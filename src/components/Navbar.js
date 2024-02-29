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
     
     <nav className='bg-black text-white flex justify-center sticky'>
     <button className=' text-white p-3 m-3 px-6' onClick={()=>navigate('/')}>Home</button>
        <button className=' text-white p-3 m-3 px-6' onClick={()=>navigate('/cart')}>
        <div className='flex'>
        <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mx-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Cart {filterId.length >= 0 && <span className='bg-white text-black rounded-full px-2 mx-1'>{filterId.length}</span>}
        </div>
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