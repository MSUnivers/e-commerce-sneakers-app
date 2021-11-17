import React from 'react'
import ProductDetails from '../productDetails/ProductDetails'
import ProductGallery from '../productGallery/ProductGallery'

export default function ProductContainer() {
    return (
        <div className='flex  justify-between m-20'>  
            <ProductGallery/>
            <ProductDetails/>
        </div>
    )
}
