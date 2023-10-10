import React, { useContext } from 'react'
import styleCSS from '@/components/ProductTable.module.css'
import { ContextProductTable } from '@/ContextApp/ContextApp'


const ProductTable = () => {

    const {dataAPI, setDataAPI } = useContext(ContextProductTable)

     

    const showData = dataAPI.map((actualProduct)=>{
        return(
            <>
            <div>
                <div>{actualProduct.title}</div>
            </div>
            </>
        )
    })

    
  return (
    <>
   
    <div>ProductTable</div>
    <div>Cards</div>
    {showData}

    </>
  )
}

export default ProductTable