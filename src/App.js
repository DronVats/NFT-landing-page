import scrollreveal from 'scrollreveal';
import React ,{useEffect,useState}from 'react'
import Clients from './components/Clients';
import Footer from './components/Footer';
import Free from './components/Free';
import Home from './components/Home';
import Like from './components/Like';
import Navbar from './components/Navbar';
import Release from './components/Release';
import ScrollToTop from './components/ScrollToTop';
import Signup from './components/Signup';
import SuperRare from './components/SuperRare';
import "./scss/index.scss"
function App() {
  useEffect(()=>{
    const registerAnimation = () =>{
      const sr = scrollreveal({

        origin:"bottom",
        distance:"80px",
        duration:2000,
        reset:false,
      });
      sr.reveal(`
      nav,.home,.free,.clients,.super-rare,.releases,
      .like,footer,.signup`,
      {interval:500}
      )
    };
    registerAnimation()
  },[])

  window.setTimeout(()=>{
    const home = document.getElementsByClassName("home")
    home[0].style.transform='none';
    const nav = document.getElementsByTagName('nav');
    nav[0].style.transform='none';

  },1500)
  return (
    <div className="app-container">
      <ScrollToTop/>
      <Navbar/>
      <Home/>
      <Free/>
      <Clients/>
      <SuperRare/>
      <Release/>
      <Like/>
      <Signup/>
      <Footer/>

    </div>
  );
}

export default App;
