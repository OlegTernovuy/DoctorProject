import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Declaration } from "./pages/Declarations/Declaration";
import { AddVac } from "./pages/addVac/AddVac";
import { Home } from "./pages/Home/Home";
import { AddPrice } from "./pages/price/AddPrice";
import { LoginPage } from "./pages/Login/LoginPage";
import { Register } from "./pages/Register/Register";
import { Appointments } from "./pages/onlineAppo/onlineappoint";


import Header from "./Components/Header";
import Footer from "./Components/footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  return (
    <>
      <Header
		    isAdmin={isAdmin}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setIsAdmin={setIsAdmin}
      />
      <Routes>
        <Route index element={<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="addVac" element={<AddVac  isLoggedIn={isLoggedIn} isAdmin={isAdmin} />} />
        <Route path="declaration" element={<Declaration />} />
        <Route path="price" element={<AddPrice isAdmin={isAdmin} />} />
        <Route
          path="loginPage"
          element={
            <LoginPage	
              setIsLoggedIn={setIsLoggedIn}
              setIsAdmin={setIsAdmin}
            />
          }
        />
        <Route path="Register" element={<Register/>} />
		  {isAdmin &&
        <Route path="onlineappoint" element={<Appointments />} />
		  }
      </Routes>
      <Footer />
    </>
  );
}

export default App;
