import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" 
            style={({isActive,isPending}) =>{
                return{
                    fontWeight : isActive ? "bold" : "",
                    color : isPending ? "red" : "",
                    background : isActive ? "red":"",
                    borderBottomLeftRadius: 9,
                    borderBottomRightRadius: 9,
                    borderTopRightRadius: 9,
                    borderTopLeftRadius: 9,
                    overflow: 'hidden',
                    
                };
            }}

          
          className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/product"
            
            style={({isActive,isPending}) =>{
                return{
                    fontWeight : isActive ? "bold" : "",
                    color : isPending ? "red" : "",
                    background : isActive ? "red":"",
                    borderBottomLeftRadius: 9,
                    borderBottomRightRadius: 9,
                    borderTopRightRadius: 9,
                    borderTopLeftRadius: 9,
                    overflow: 'hidden',
                    
                };
            }}

          className="nav-link">Product</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/blog" 
            
            style={({isActive,isPending}) =>{
                return{
                    fontWeight : isActive ? "bold" : "",
                    color : isPending ? "red" : "",
                    background : isActive ? "red":"",
                    borderBottomLeftRadius: 9,
                    borderBottomRightRadius: 9,
                    borderTopRightRadius: 9,
                    borderTopLeftRadius: 9,
                    overflow: 'hidden',
                    
                };
            }}
          
          className="nav-link">Blog</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/register" 
            
            style={({isActive,isPending}) =>{
                return{
                    fontWeight : isActive ? "bold" : "",
                    color : isPending ? "red" : "",
                    background : isActive ? "red":"",
                    borderBottomLeftRadius: 9,
                    borderBottomRightRadius: 9,
                    borderTopRightRadius: 9,
                    borderTopLeftRadius: 9,
                    overflow: 'hidden',
                    
                };
            }}


          className="nav-link">Register</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/login" 

            style={({isActive,isPending}) =>{
                return{
                    fontWeight : isActive ? "bold" : "",
                    color : isPending ? "red" : "",
                    background : isActive ? "red":"",
                    borderRadius: "9px",
                    // borderBottomRightRadius: 9,
                    // borderTopRightRadius: 9,
                    // borderTopLeftRadius: 9,
                    // overflow: 'hidden',
                    
                };
            }}
          
          className="nav-link">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
