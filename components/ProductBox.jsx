import React from 'react'
import styleCSS from '@/components/ProductBox.module.css'

const ProductBox = ({actualProduct}) => {

    
  return (
    <div className={styleCSS.productBox}>
        <div className={styleCSS.productBox_title}>{actualProduct.title}</div>
        <div className={styleCSS.productBox_img}> <img src={actualProduct.image} className={styleCSS.productBox_img}></img> </div>
        <div className={styleCSS.productBox_price}>{actualProduct.price}</div>
    </div>
  )
}

export default ProductBox