import React from 'react'
import styleCSS from '@/components/ProductBox.module.css'

const ProductBox = ({actualProduct}) => {

    
  return (
    <div className={styleCSS.productBox}>
        {/* <h3>{actualProduct.title}</h3> */}
        {/* <img src={actualProduct.image} className={styleCSS.productBox_img}></img>
        <h2>{actualProduct.price}</h2> */}
        <div className={styleCSS.productBox_title} ></div>
        <div className={styleCSS.productBox_img}></div>
        <div className={styleCSS.productBox_price}></div>
    </div>
  )
}

export default ProductBox