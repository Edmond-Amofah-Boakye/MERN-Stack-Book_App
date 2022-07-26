import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import "../../styles/Products.css"
import swal from 'sweetalert'

const EditBook = () => {

    const [book, setBook] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [isChecked, setChecked] = useState(false);

    const id = useParams().id
    
    useEffect(() => {
        
        const url = `http://localhost:4000/api/books/${id}`

        axios.get(url).then((res)=>{
            setBook(res.data.name)
            setAuthor(res.data.author)
            setDescription(res.data.description)
            setImage(res.data.imageUrl)
            setPrice(res.data.price)
            setChecked(res.data.available)
        })

    }, [id])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const formData = new FormData()

        formData.append('name', book)
        formData.append('author', author)
        formData.append('description', description)
        formData.append('image', image)
        formData.append('price', price)
        formData.append('available', isChecked)

        const url = `http://localhost:4000/api/books/${id}`

        axios.put(url, formData).then((res)=>{
          if(res.status === 200){
            // navigate('/books')
            window.location.reload()
            swal({
              title: "Good job!",
              text: "Book Succesfully Edited",
              icon: "success",
              button: "OK",
            });
          }else{
            console.log(res.status);
          }
        })
    }
 
  return (
    <>
          <div className="product-form">
        <form onSubmit={handleSubmit}>
          <h1>Edit Book</h1>
          <div className="name">
            <label htmlFor="bookname">Book Name:</label>
            <input
              type="text"
              required
              value={book}
              onChange={(e) => setBook(e.target.value)}
            />
          </div>
          <div className="Author">
            <label htmlFor="Author">Author:</label>
            <input
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="email">
            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="20"
              placeholder="Enter Book Description....."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="image">
            <label htmlFor="upload-image">Upload Image:</label>
            <input type="file" filename="image" onChange={(e) => setImage(e.target.files[0])} required/>
          </div>
          <div className="price">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="available">
            <label htmlFor="available">Available:</label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setChecked(e.target.checked)}
            />
          </div>
          <button>Add Book</button>
        </form>
      </div>
    </>
  )
}

export default EditBook