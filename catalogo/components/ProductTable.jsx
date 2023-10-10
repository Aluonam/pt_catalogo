import React, { useContext } from 'react'
import styleCSS from '@/components/ProductTable.module.css'
import { ContextProductTable } from '@/ContextApp/ContextApp'


const ProductTable = () => {

    const {dataAPI, setDataAPI} = useContext(ContextProductTable)

  return (
    <>
   
    <div>ProductTable</div>
    <div>Cards</div>
    {dataAPI}

    </>
  )
}

export default ProductTable