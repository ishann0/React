import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./myApp/Home";
import About from './myApp/About';
import Header from "./myApp/Header";
import Myapp from "./myApp/Myapp";
import Footer from "./myApp/Footer";
import {
  BrowserRouter,
  Routes,Route

} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
<Routes>
<Route path='/Home' element= {<Home/>}/>
<Route path='/About' element= {<About/>} />
</Routes>
<Myapp/>
    <Footer/>
    </BrowserRouter>
 );
}

export default App;
