import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../../styles/Views.css'

const View = () => {
    const [views, setAllViews] = useState({})
    const id = useParams().id

    console.log(id);
    
    useEffect(() => {
        const url = `http://localhost:4000/api/books/${id}`

        axios.get(url).then((res)=>{
            setAllViews(res.data)
        })
    }, [id])
       console.log(views);
  return (
    <>
        <div className="views-wrapper" style={{marginTop: "80px"}}>
            <div className="view-image">
                <img src={`//localhost:4000/${views.imageUrl}`} alt={views._id} />
            </div>
            <div className="views-content">
                <h1>{views.name}</h1>
                <h2>{views.author}</h2>
                <p>{views.description}</p>
                <h3>¢{views.price}.00</h3>
                <h3>{views.available ? "Available" : "Not Available"}</h3>
            </div>
        </div>
    </>
  )
}

export default View