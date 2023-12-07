import React from 'react'
import style from './Filter.module.css'

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

    // const all = () => {
    //   setDataProduct({originData:dataProduct.originData, showData: dataProduct.originalData})
    // }
    // <button onClick={()=>setDataAPI({originalData:dataAPI.originalData, showData:dataAPI.originalData})}>todos</button>

  return (
    <div className={style.filterBtn}>

      <button onClick={()=>{menWear()}}> ropa hombre </button>
      <button onClick={()=>{womanWear()}}> ropa de mujer </button>
      <button onClick={()=>{electronics()}}> electrónica </button>
      <button onClick={()=>{setDataProduct({originData:dataProduct.originData, showData:dataProduct.originData})}}> Mostrar todo </button>
    
    </div>
    
  )
}

export default Filter