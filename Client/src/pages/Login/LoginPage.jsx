import React, { Component, useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { Login } from "../../LogReg/Login";

export const LoginPage = ({setIsAdmin,setIsLoggedIn}) => {

  return (
    <div>
      <h2 className="loginForm">Авторизація</h2>
      <Login setIsAdmin={setIsAdmin} setIsLoggedIn={setIsLoggedIn}/>
      <p className="formRedirect">
        Or <Link to="/Register">Register</Link>
      </p>
    </div>
  );
};
