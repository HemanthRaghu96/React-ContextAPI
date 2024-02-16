// Importing React library to enable the usage of JSX syntax
import React from 'react'

// Importing the data from './data', assuming it contains products data
import data from './data'

// Importing the Card component from './Card'
import Card from './Card'

// Defining the Body component as a functional component
const Body = () => {
    // Extracting the 'products' array from the imported data
    const products=data.products

    // Rendering the JSX content
    return (
        // Main section of the application
        <main>
            {/* Grid layout for displaying products */}
            <div className='w-11/12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto  mb-20'>
                {/* Mapping through each product and rendering a Card component for each */}
                {products.map((product)=>(
                    <Card key={product.id} product={product}/>
                ))}
            </div>
        </main>
    )
}

// Exporting the Body component as the default export
export default Body
