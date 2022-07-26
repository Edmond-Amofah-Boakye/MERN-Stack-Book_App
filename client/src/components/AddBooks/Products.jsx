import React, { useState, useContext } from "react";
import { fetchedDataContext } from "../../store/Context";
// import { useNavigate } from 'react-router-dom'
import "../../styles/Products.css";
import axios from "axios";
import swal from 'sweetalert';

const Products = () => {

  const { setFetchedData } = useContext(fetchedDataContext);

  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [isChecked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", book);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("price", price);
    formData.append("available", isChecked);

    const url = "http://localhost:4000/api/books";

    axios.post(url, formData).then((res) => {
      setFetchedData((prev) => {
        return [...prev, res.data];
      });

      if(res.status === 201){
        swal({
          title: "Good job!",
          text: "Book Succesfully Added",
          icon: "success",
          button: "OK",
        });
        setBook("")
        setAuthor("")
        setDescription("")
        setImage("")
        setPrice("")
        setChecked("")
        // window.location.reload()
      }else{
        console.log(res);
      }
    });
  };

  return (
    <>
      <div className="product-form">
        <form onSubmit={handleSubmit}>
          <h1>Add Book</h1>
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
              cols="10"
              rows="10"
              placeholder="Enter Book Description....."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="image">
            <label htmlFor="upload-image">Upload Image:</label>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
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
  );
};

export default Products;
