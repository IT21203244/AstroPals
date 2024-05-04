import { useNavigate } from "react-router-dom"
import ProfileInfo from "../Cards/ProfileInfo"
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import PropTypes from "prop-types";
import logo from "../../assets/logo.png"


const Navbar = ({ userInfo }) => {

  const [ searchQuery, setSearchQuery ] = useState("");

  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login")
  }

  const handleSearch = () => {

  }

  const onClearSearch = () => {
    localStorage.clear()
    setSearchQuery("");
  }

  return (
    <div className="bg-white flex flex-col md:flex-row items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">
        <a href="/dashboard">
          <img src={logo} alt="Logo" className="h-10 w-35 mr-2" />
        </a>
      </h2>


      <div className="flex-grow md:flex-grow-0">
        <SearchBar
          value={searchQuery}
          onChange={({ target }) => {
            setSearchQuery(target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
      </div>

      <ProfileInfo userInfo={userInfo} onLogout={onLogout}/>
    </div>
  )
}

Navbar.propTypes = {
  userInfo: PropTypes.object,
};

export default Navbar