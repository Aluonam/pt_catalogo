import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const ContextProductTable = createContext();

export const ContextApp = (props) => {

    const [dataAPI, setDataAPI] = useState({originData:[], showData:[]})

    useEffect(() => {
      const url = `https://fakestoreapi.com/products`;

      axios.get(url)
      .then(response => setDataAPI({originData:response.data, showData:response.data}))
      .catch(error => console.log("error detected", error))

    }, [])

   

    const valueProvider = {
        dataAPI,
        setDataAPI,
    }
    
  return (
    <ContextProductTable.Provider value={valueProvider}>
        {props.children} 
    </ContextProductTable.Provider>
  )
}

export default ContextApp