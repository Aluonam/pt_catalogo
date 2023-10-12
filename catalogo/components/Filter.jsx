import React from 'react'

const Filter = ({setDataProduct}) => {

    const mensWear = () => {
        setDataProduct((valorActual)=>valorActual.filter((elemActual)=> elemActual.category==="men's clothing"))
    }

    const electronics = () => {
        setDataProduct((valorActual)=>valorActual.filter((elemActual)=> elemActual.category==="electronics"))
    }
    
  return (
    <>
    <button onClick={()=>{mensWear()}}> ropa hombre </button>
    <button onClick={()=>{electronics()}}> electronics </button>
    </>
  )
}

export default Filter