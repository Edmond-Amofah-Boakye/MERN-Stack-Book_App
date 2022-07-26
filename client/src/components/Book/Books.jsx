import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { AiOutlineFolderView, AiOutlineDelete } from "react-icons/ai";
import { fetchedDataContext } from "../../store/Context";
import axios from "axios";
import swal from 'sweetalert';

const Books = () => {
  const { fetchData, setFetchedData } = useContext(fetchedDataContext);

  const [search, setSearch] = useState('')

  const searchResult = fetchData.filter((searchInput)=>{
    return searchInput.name.toLowerCase().includes(search.toLowerCase())
  })
  
  const handleDelete = (id) => {
    const url = `http://localhost:4000/api/books/${id}`;

    axios.delete(url).then((res) => {
      setFetchedData(
        fetchData.filter((e) => {
          return e._id !== id;
        })
      );
      swal({
        title: "Good job!",
        text: "Book has succesfully been deleted",
        icon: "success",
        button: "OK",
      });
    });
  };

  const fetchResult = searchResult.map((data) => {
    return (
      <div className="card" key={data._id}>
        <div className="cardimg">
          <img src={`//localhost:4000/${data.imageUrl}`} alt="..." />
        </div>
        <div className="details">
          <h3>{data.name}</h3>
          <h4>{data.author}</h4>
          <p>{data.description}</p>
          <h3>Price: {data.price}</h3>
        </div>
        <div className="actions">
          <Link to={`/books/view/${data._id}`}>
            <AiOutlineFolderView
              style={{ color: "blue", fontSize: "1.8rem" }}
            />
          </Link>
          <Link to={`/books/edit/${data._id}`}>
            <FaEdit style={{ color: "green ", fontSize: "1.5rem" }} />
          </Link>
          <AiOutlineDelete
            style={{ color: "red", fontSize: "1.5rem" }}
            onClick={() => handleDelete(data._id)}
          />
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="book-wrapper">
        <div className="search-bar">
          <input type="text" placeholder="Search Your Favourite Book Name Here....." onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <div className="allBooks">
          {fetchData.length <= 0 && (
            <h1 style={{ margin: "30px auto" }}> Loading ......</h1>
          )}
          {fetchResult}
        </div>
      </div>
    </>
  );
};

export default Books;
