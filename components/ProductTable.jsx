import React, { useContext } from 'react'
import styleCSS from '@/components/ProductTable.module.css'
import { ContextProductTable } from '@/ContextApp/ContextApp'
import ProductBox from './ProductBox'
import Filter from './Filter'


const ProductTable = () => {

    const { dataAPI, setDataAPI } = useContext(ContextProductTable)

    const showData = dataAPI.showData.map((actualProduct)=>{
        return(

            <ProductBox actualProduct={actualProduct}></ProductBox>
        )
    })


  return (
    <>

    <h2 className={styleCSS.title}>CATÁLOGO</h2>

    <Filter dataProduct={dataAPI} setDataProduct={setDataAPI}></Filter>
    
    <div className={styleCSS.globalProductBox}>
        {showData}
    </div>
    
    </>
  )
}

export default ProductTable