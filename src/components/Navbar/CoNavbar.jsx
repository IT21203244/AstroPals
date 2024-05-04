import { useState } from 'react';

const CoNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-gray-800 bg-opacity-75 py-7 text-white" 
        style={{ backgroundColor: "#1b1b1b", overflowX: "hidden" }}
    >
        <div className="container mx-auto">
          <nav className="flex justify-between items-center">
            <div className="container flex mx-auto pl-7 text-white">
              <h1 className="text-lg font-medium">Explore</h1>
              <i className="fa-solid fa-circle-chevron-down text-white text-lg pl-3" style={{ color: '#ffffff' }} onClick={toggleDropdown}></i>
            </div>

            <ul className="flex space-x-11 pr-7">
              <li>
                <a href="/dashboard" className="text-white hover:text-gray-400">
                  HOME
                </a>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-gray-400">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="/apod" className="text-white hover:text-gray-400">
                  APOD
                </a>
              </li>
              <li>
                <a href="/mars" className="text-white hover:text-gray-400">
                  MARS
                </a>
              </li>
              <li>
                <a href="/asteroids" className="text-white hover:text-gray-400">
                  ASTEROIDS
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {isDropdownOpen && (
          <ul className="flex flex-col space-y-5 space-x-8 pr-7 absolute z-10 bg-white opacity-90 text-black text-lg font-bold mt-7 ml-7 h-3/6" style={{width: "170px"}}>
              <li>
                <a href="" className="">
                  
                </a>
              </li>
              <li>
                <a href="/dashboard" className="hover:text-gray-400 text-black">
                  HOME
                </a>
              </li>
              <li>
                <a href="/apod" className="hover:text-gray-400 text-black">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="/apod" className="hover:text-gray-400 text-black">
                  APOD
                </a>
              </li>
              <li>
                <a href="/mars" className="hover:text-gray-400 text-black">
                  MARS
                </a>
              </li>
              <li>
                <a href="/asteroids" className="hover:text-gray-400 text-black">
                  ASTEROIDS - NeoWs
                </a>
              </li>
              <li>
                <a href="/astronauts" className="hover:text-gray-400 text-black">
                  ASTRONAUTS
                </a>
              </li>
          </ul>
        )}
    </div>
  )
}

export default CoNavbar