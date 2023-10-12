import React from 'react'

const Filter = ({dataProduct, setDataProduct}) => {

    const menWear = () => {
      const arrMenWear = dataProduct.originData.filter((e)=>e.category === "men's clothing")
        setDataProduct({...dataProduct, showData:arrMenWear})
    }

    const womanWear = ()=>{
        const arrWomenWear = dataProduct.originData.filter((e)=>e.category === "women's clothing")
        setDataProduct({...dataProduct, showData:arrWomenWear})
    }

    const electronics = () => {
      const arrElectronics = dataProduct.originData.filter((e)=>e.category === "electronics")
        setDataProduct({...dataProduct, showData:arrElectronics})
    }

  return (
    <>
    <button onClick={()=>{menWear()}}> ropa hombre </button>
    <button onClick={()=>{womanWear()}}> ropa de mujer </button>
    <button onClick={()=>{electronics()}}> electrónica </button>
    
    </>
  )
}

export default Filter