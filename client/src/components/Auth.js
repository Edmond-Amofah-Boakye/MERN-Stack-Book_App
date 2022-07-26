import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { fetchedDataContext } from '../store/Context'

export const Auth = ({children}) => {

    // const navigate = useNavigate()
    const { isLoggedIn } = useContext(fetchedDataContext)
    
    if(!isLoggedIn){
        return <Navigate to='/login' />
    }

    return children;
}
