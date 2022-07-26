import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Singnup.css";
import axios from "axios";
import swal from 'sweetalert';

const Signup = () => {
  const navigate = useNavigate()

  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
        fullname: fullname,
        username: username,
        email: email,
        password: password
    }

    const url = 'http://localhost:4000/api/signup';

    axios.post(url, userData).then((res)=>{
      if(res.status === 200){
        swal({
          title: "Good job!",
          text: res.data.message,
          icon: "success",
          button: "OK",
        });
        navigate('/login')
        window.location.reload()
      }
    }).catch((data)=>{
      alert("could not register")
    })

  };

  return (
    <div className="divd">
      <div className="signin-form">
        <form action="" onSubmit={handleSubmit}>
          <h1>SIGNUP</h1>
          <div className="fullname">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              required
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="username">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="fullname"
              id=""
              required
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="fullname"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="username">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="fullname"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button>Sign Up</button>
        </form>
        <p className="click-sign">
          Do You have An Account? <Link to="/login">Click Here To Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
