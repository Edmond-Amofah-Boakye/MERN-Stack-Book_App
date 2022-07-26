import React, { useState, useContext } from 'react'
import axios from 'axios'
import '../../styles/Login.css'
import {Link, useNavigate} from 'react-router-dom'
import { fetchedDataContext } from '../../store/Context'
import swal from 'sweetalert';

const Login = () => {
    const navigate = useNavigate()
    const {handleLogin} = useContext(fetchedDataContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const saveData = {
        email:email,
        password: password
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        const url = "http://localhost:4000/user/login"
        axios.post(url, saveData).then((res)=>{
            if(res.status === 200){
                handleLogin(res.data.token)
                swal({
                    title: "Good job!",
                    text: res.data.message,
                    icon: "success",
                    button: "OK",
                  });
                navigate('/books', {replace: true})
                window.location.reload()
            }
                    
        }).catch((error)=>{
            alert("could not signin")
        })
    }






  return (
    <>
        <div className="login-form" onSubmit={handleSubmit}>
            <form action="">
                <h1>LOGIN</h1>
                <div className="username">
                    <label htmlFor="username">Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                </div>
                <div className="username">
                    <label htmlFor="username">Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                </div>
                <button>Login</button>
            </form>
            <p className="click-sign">You Don't have An Account Yet? <Link to="/signup">Click Here To Create Account</Link></p>
        </div>
    </>
  )
}

export default Login