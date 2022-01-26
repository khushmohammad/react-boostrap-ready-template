import React, { useState } from "react";
import './App.css';
import './App.scss';
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Homepage from './component/content/homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
