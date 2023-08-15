import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { ApiRequestComponent } from "./pages/ApiRequestComponent";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/account/login" element={<Login />}></Route>
        <Route path="/" element={<ApiRequestComponent />}></Route>
        <Route path="/home/index" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )

  /*
  const [currentPage, setCurrentPage] = useState('login')

  return (
    <div className="App">
      {
        currentPage === "login" ? <Login /> : <Home />
      }
    </div>
  );
  */
}

export default App;
