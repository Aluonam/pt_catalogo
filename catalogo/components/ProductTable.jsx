import React, { useContext } from 'react'
import styleCSS from '@/components/ProductTable.module.css'
import { ContextProductTable } from '@/ContextApp/ContextApp'
import ProductBox from './ProductBox'
import Filter from './Filter'


const ProductTable = () => {

    const {dataAPI, setDataAPI } = useContext(ContextProductTable)

    const showData = dataAPI.map((actualProduct)=>{
        return(

            <ProductBox actualProduct={actualProduct}></ProductBox>
        )
    })


  return (
    <>
    <div>ProductTable</div>
        <div>Cards</div>
    <div className={styleCSS.globalProductBox}>
        {showData}
    </div>
    <Filter></Filter>
    </>
  )
}

export default ProductTable