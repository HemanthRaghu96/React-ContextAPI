import React from 'react'

const Footer = () => {
  
  const year=new Date().getFullYear()

  return (
   <footer>
   <div className='flex justify-center items-center font-poppins font-normal text-lg bg-black text-white h-28'>
    <span>Copyright &copy; E-Cart {year}</span>
   </div>
   </footer>
  )
}

export default Footer