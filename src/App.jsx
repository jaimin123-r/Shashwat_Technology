import React from "react";
import BlurText from "./reactbit/BlurText/BlurText";
import Navbar from "./components/Navbar";
import Grp_card from "./components/Grp_Card";
import Footer from "./components/Footer";

function App() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <>
     <Navbar/>
     <Grp_card/>
     <Footer/>
    </>
  );
}

export default App;
