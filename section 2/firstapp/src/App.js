import{ BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Contactus  from  "./components/contactus";
import EventHandling from "./components/eventhandling";
import Gallery  from "./components/gallery" ;
import ImageHandling from "./components/image handling";
import Login2 from "./components/login2";
 import { createTheme,ThemeProvider } from "@mui/material";
 import {useState} from 'react';
 import  ListProducts from "./components/listproducts";
 import Sign from "./components/sign";
 import Product from "./components/product";
import ManageProduct from "./components/manageproduct";
import { UserProvider } from "./userContext";
import AddProduct from "./components/addproduct"
import Chat from "./components/chat";


function App() {
  const [darktheme, setDarktheme] = useState(false);
  const themeB = createTheme({
    palette: {
      mode: "dark",
      background:{
        paper: "#5555"
      }
    },
  });

  const themeA = createTheme({
    palette: {
      mode: "light",
      success: {
        main: "#00ffb3",
        dark: "#ccad00",
      },
    },
  });

  return (
    <div>
      <UserProvider>
      <ThemeProvider theme={darktheme ? themeB : themeA}>
        <BrowserRouter>
          <Header darktheme={darktheme} setDarktheme={setDarktheme}></Header>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Home></Home>} path="/home" />
          <Route element={<Signup />} path="/register" />
          <Route element={<Contactus />} path="/contact" />
          <Route element={<EventHandling />}path="/event" />
          <Route element={<Gallery  />}path="/images" />
           <Route element={<ImageHandling  />}path ="/nature" /> 
           <Route element={<Login2 />}path ="/new" /> 
           <Route element={<Sign />} path="/sign" />
           <Route element={<Product />} path="/product" />
           <Route element={<ManageProduct />} path="/manage" />
           <Route element= {<AddProduct />} path="/=add" />
           <Route element={<Chat />} path="/chat" />

          <Route path="/" element={<Navigate to="/login" />} />


          {/* create a signup component and add its route here */}
        </Routes>
      </BrowserRouter>
     
      {/* <ListProducts /> */}
      </ThemeProvider> 
      </UserProvider>

    </div>
      
    
  );
}

export default App;