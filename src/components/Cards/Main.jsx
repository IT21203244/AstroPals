import { useState } from "react";
import apod from "../../assets/mars.png"
import SideBar from "./SideBar";

const Main = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const overlayStyles = {
    position: "absolute",
    top: "30px", 
    left: "50px", 
    zIndex: "1"
  };

  const imageStyles = {
    opacity: "0.6" // Adjust opacity as needed (between 0 and 1)
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <img src={apod} alt="mars-demo-image" className="bgImage" style={imageStyles}/>
      <div style={overlayStyles}>
        <h2 className="text-white text-2xl font-medium">The Brutal Martian Landscape</h2>
        <h1 className="text-white text-5xl font-bold">APOD</h1>
        <button onClick={toggleSidebar}>
          <i className="fa-solid fa-circle-info color text-white text-xl py-4"></i>
        </button>
      </div>
      {sidebarVisible && <SideBar onClose={closeSidebar} />}
    </div>
    
  );
}

export default Main;