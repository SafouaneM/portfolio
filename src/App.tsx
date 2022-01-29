import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";




function App() {
  return (
      <div className=" bg-gray-900 bg-repeat">
    <main className="app min-h-screen w-full md:w-10/12 m-auto ">
        <Navbar/>
        <Content/>
        <Footer/>
    </main>
      </div>
  );
}

export default App;
