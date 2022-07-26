import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    const styles = {
        margin: "15rem auto 1rem auto",
        width: "40rem",
        textAlign: "center",
        fontSize: "20px",
        color: "red"
    }

  return (
    <>
        <div className="error" style={styles}>
            <h1 style={{marginBottom: "1.5rem"}}>Sorry Page Not Found....</h1>
            <Link to='/'><p style={{color: "blue"}}>Click Here To Homepage</p></Link>
        </div>
    </>
  )
}

export default Error