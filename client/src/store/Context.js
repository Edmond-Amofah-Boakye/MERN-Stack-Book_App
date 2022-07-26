import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'

export const fetchedDataContext = createContext()


const Context = ({children}) => { 
  const initialToken = localStorage.getItem("token")

  const [fetchData, setFetchedData] = useState([])
  const [token, setToken] = useState(initialToken)

   const isLoggedIn = !!token

   const handleLogout = ()=>{
      localStorage.removeItem("token")
      swal({
        title: "Great!",
        text: "You Succesfully Loggedout",
        icon: "success",
        button: "OK",
      });
      
      window.location.reload()
   }

   const handleLogin = (token)=>{
      localStorage.setItem("token", token)
      setToken(token)
   }

    useEffect(() => {
        const url = 'http://localhost:4000/api/books';

        axios.get(url).then((res)=>{
            setFetchedData(res.data)
        })
        
    }, [])
    
  return (
    <fetchedDataContext.Provider value={{fetchData,  setFetchedData, isLoggedIn, handleLogin, handleLogout }}>
            {children}
    </fetchedDataContext.Provider>
  )
}

export default Context