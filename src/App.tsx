import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import Footer from "./components/Footer";




function App() {
  return (
    <main className="">
        <Navbar/>
        <Content/>
        <Projects/>
        <Socials/>
        <Footer/>
    </main>
  );
}

export default App;
