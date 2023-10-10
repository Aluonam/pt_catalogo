import React, { createContext, useState, useEffect } from 'react'


export const ContextProductTable = createContext();
export const ContextApp = (props) => {

    const [dataAPI, setDataAPI] = useState([])

    useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [])

    const valueProvider = {

    }
    
  return (
    <ContextProductTable.Provider value={valueProvider}>

    </ContextProductTable.Provider>
  )
}

export default ContextApp