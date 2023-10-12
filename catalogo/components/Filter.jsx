import React from 'react'

const Filter = ({setDataProduct}) => {

    const mensWear = () => {
        setDataProduct((valorActual)=>valorActual.filter((elemActual)=> elemActual.category==="men's clothing"))
    }

    const womanWear = ()=>{
        setDataProduct((valor)=> valor.filter((e)=>e.category === "women's clothing"))
    }

    const electronics = () => {
        setDataProduct((valorActual)=>valorActual.filter((elemActual)=> elemActual.category==="electronics"))
    }

  return (
    <>
    <button onClick={()=>{mensWear()}}> ropa hombre </button>
    <button onClick={()=>{womanWear()}}> ropa de mujer </button>
    <button onClick={()=>{electronics()}}> electrónica </button>
    
    </>
  )
}

export default Filter