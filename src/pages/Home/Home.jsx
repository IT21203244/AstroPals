// import React from 'react'

import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import CoNavbar from "../../components/Navbar/CoNavbar";
import Body from "../../components/Body/Body";

const Home = () => {

  const [ userInfo, setUserInfo ] = useState(null);
  const navigate = useNavigate();

  // Get User Info
  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user");
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  useEffect(() => {
      getUserInfo();
    return () => {}
  }, [])
  
  

  return (
    <div >
      <Navbar userInfo={userInfo} />

      <CoNavbar />

      <Body />

      
    </div>
  )
}

export default Home