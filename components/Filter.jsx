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

      <button onClick={()=>{menWear()}} className={style.buttonGradient4}> ropa hombre </button>
      <button onClick={()=>{womanWear()}} className={style.buttonGradient4}> ropa de mujer </button>
      <button onClick={()=>{electronics()}} className={style.buttonGradient4}> electrónica </button>
      <button onClick={()=>{setDataProduct({originData:dataProduct.originData, showData:dataProduct.originData})}} className={style.buttonGradient2}> Mostrar todo </button>
    
    </div>
    
  )
}

export default Filter