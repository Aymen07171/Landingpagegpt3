import React from 'react'
import ReactDOM from "react-dom/client";      
import  Navbars from './Component/Navbars';
import Header from './Component/Header';
import Whatgpt from './Component/Whatgpt';
import Features from './Component/Features';
import Possibility from './Component/Possibility';
import Callaction from './Component/Callaction';
import Blog from "./Component/Blog";
import Footer from "./Component/Footer"


export const AppLayout = () => {
  return (
    <div className="fixed inset-0 overflow-auto bg-gradient-to-br from-blue-800 to-indigo-500 ">
      <Navbars />
      <Header />
      <Whatgpt />
      <Features />
      <Possibility />
      <Callaction />
      <Blog />
      <Footer />
    </div>
    
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

