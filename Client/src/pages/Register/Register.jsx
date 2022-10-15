import React, { Component, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { SignUp } from "../../LogReg/SignUp";

export const Register = () => {
  return (
    <div>
        <h2 className="loginForm">Реєстрація</h2>
        <SignUp/>
         <p className="formRedirect">
         Have an account <Link to="/loginPage">Увійти</Link>
      </p>
    </div>
  );
};
