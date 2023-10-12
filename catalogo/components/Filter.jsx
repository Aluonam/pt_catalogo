import React from 'react'

const Filter = ({setDataProduct}) => {

    const mensWear = () => {
        setDataProduct((valorActual)=>valorActual.filter((elemActual)=> elemActual.category==="men's clothing"))
    }

  return (
    <>
    <button onClick={()=>{mensWear()}}> ropa hombre </button>
    </>
  )
}

export default Filter