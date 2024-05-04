import { Link } from "react-router-dom";
import apod from "../../assets/mars.png";
import astronauts from "../../assets/astronauts.jpg"
import Footer from "../Footer/Footer";

const Body = () => {
  return (
    <div>
      <div>
        <img src={apod} alt="mars-demo-image" className="w-full h-svh object-cover opacity-50" />
        <div className="absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-8xl font-bold mt-5">Astro Pals</h1>
          <p className="text-lg mt-7">Hello, Pals! Welcome to Astro Pals - a place to learn about Space!</p>
          <p className="text-lg">Dive in the Space with Astro Pals!</p>
        </div>
      </div>
      <div className="bg-white text-left pl-28 grid-cols-12" style={{ height: "700px"}}>
        <p className="text-7xl font-bold pt-24">Meet the</p>
        <p className="text-7xl font-bold pt-5">Astronauts </p>
        <p className="text-7xl font-bold pt-5">Aboard the </p>
        <p className="text-7xl font-bold pt-5">Space Station</p>
        <p className="text-xl pt-24">Go to Now in Space
          <Link to="/astronauts"> 
            <i className="fa-sharp fa-solid fa-circle-right ml-2" style={{ color: '#f91010', cursor: 'pointer' }}></i> 
          </Link>
        </p>
        
        <div style={{ paddingLeft: "750px", position: "absolute", top: "950px " }} className="pr-24">
          <img src={astronauts}></img>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Body;
