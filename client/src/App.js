import './App.css';
import {Routes, Route } from 'react-router-dom'
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Products from './components/AddBooks/Products';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';
import BookPage from './components/Book/BookPage';
import EditBook from './components/EditBooks/EditBook';
import View from './components/viewpage/View';
import Error from './components/Error';
import { Auth } from './components/Auth';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/books'  element={<Auth><BookPage /></Auth>}/>
          <Route path='/products' element={<Auth><Products /></Auth>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/books/edit/:id' element={ <Auth><EditBook /></Auth>}/>
          <Route path='/books/view/:id' element={<Auth><View /></Auth>}/>
          <Route path='*' element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
