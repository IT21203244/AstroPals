import { useEffect, useState } from "react";
import CoNavbar from "../../components/Navbar/CoNavbar"
import Navbar from "../../components/Navbar/Navbar"
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

const Apod = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [photoData, setPhotoData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=tDSu7FUQhiJYYPIOKdUzeXvHSJnmjNhYT0e4I65B`
            );
            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }

        fetchPhoto();
    }, []);

    useEffect(() => {
        async function getUserInfo() {
            try {
                const response = await axiosInstance.get("/get-user");
                if (response.data && response.data.user) {
                    setUserInfo(response.data.user);
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    localStorage.clear();
                    navigate("/login");
                }
            }
        }

        getUserInfo();
    }, [navigate]);

    return (
        <>
            <Navbar userInfo={userInfo} />
            <CoNavbar />
            {photoData && (
                <div className="container mx-auto px-4 py-5 flex justify-center items-center">
                    <img className="w-5/12 object-cover mb-4 ml-0 mr-7" src={photoData.url} alt={photoData.title} />
                    <div className="text-white">
                        <h1 className="text-3xl font-bold mb-2 text-blue-300">{photoData.title}</h1>
                        <p className="text-sm mb-2">{photoData.date}</p>
                        <p className="text-base text-justify mr-5">{photoData.explanation}</p>
                    </div>
                </div>
                
            )}
        </>
    );
};

export default Apod;
