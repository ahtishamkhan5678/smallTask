import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Blog from "../pages/Blog";
import Register from "../pages/Register";
import Login from "../pages/Login";
const MainRoute =()=>{
    return(
        // below
        <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/product" element={<Product/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
        </div>
    )
};
export default MainRoute;