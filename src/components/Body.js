import React from 'react'
import data from './data'
import Card from './Card'

const Body = () => {
    const products=data.products
  return (
   <main >
   <div className='w-11/12 grid grid-cols-3 mx-auto  mb-20'>
   {products.map((product)=>(
    <Card key={product.id} product={product}/>
))}
   </div>

   </main>
  )
}

export default Body