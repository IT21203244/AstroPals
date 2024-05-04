import { useEffect, useState } from "react";
import CoNavbar from "../../components/Navbar/CoNavbar";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axiosInstance from './../../utils/axiosInstance';
import Footer from "../../components/Footer/Footer"

const About = () => {
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();

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
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-blue-300 mb-6 mt-8">About Astro Pals</h1>
                    <p className="text-base text-gray-100">Astro Pals is your go-to destination for all things space-related. The mission is to make space exploration accessible and exciting for everyone.</p>
                    <p className="text-base text-gray-100">Whether you are a seasoned space enthusiast or just curious about the cosmos, Astro Pals has something for you. Explore our curated collection of articles, images, and interactive experiences to embark on a journey through the universe.</p>
                    <p className="text-base text-gray-100">This projec&rsquo;s focus will be to use the NASA API and build a seperate page for each API that I use. Apart from that I have used various data related to the space domain.</p>

                    <h1 className="text-6xl font-bold text-blue-300 mt-20 mb-12">What you will find...</h1>
                    <table className="mr-20 ml-20" style={{ borderCollapse: "collapse"}}>
                        <tbody>
                            <tr>
                                <td style={{ padding: "10px" }}>
                                    <h2 className="text-xl text-center font-medium text-blue-400 mb-10">Astronauts abroad the Space Station</h2>
                                </td>
                                <td style={{ padding: "10px" }}>
                                    <p className="text-base font-light text-white text-justify mb-10 ml-3">This page is a display of astronauts aboard the space station. It showcases images and information about each astronaut, 
                                    including their name, birthday, hometown, spaceflights, and special facts or factors about them. Users can click on each astronaut&rsquo;s card to view more details in a pop-up window. 
                                    Additionally, the page is designed to be responsive, adapting to different screen sizes for optimal viewing.</p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: "10px" }}>
                                    <h2 className="text-xl font-medium text-blue-400 mb-10">Astronomy Picture of the Day (APOD)</h2>
                                </td>
                                <td style={{ padding: "10px" }}>
                                    <p className="text-base font-light text-white text-justify ml-3 mb-10">This page is dedicated to the Astronomy Picture of the Day (APOD) provided by NASA. It fetches the latest APOD image and accompanying information, 
                                    including the title, date, and explanation, from the NASA API. Users can view stunning images of space and learn about various celestial phenomena. The page features a responsive layout and displays the fetched APOD content in an easy-to-read format.</p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: "10px" }}>
                                    <h2 className="text-xl text-center font-medium text-blue-400 mb-10">Mars Rover Photos</h2>
                                </td>
                                <td style={{ padding: "10px" }}>
                                    <p className="text-base font-light text-white text-justify mb-10 ml-3">This page is dedicated to displaying photos captured by the Mars Rover, specifically the Curiosity rover. It fetches data from the NASA Mars Rover API to showcase images taken by the rover on the Martian surface. 
                                    Users can browse through the collection of photos, filter them by camera type, and view additional details about each selected photo. The page also provides information about the rover&rsquo;s mission, including its landing date, launch date, status, and more.</p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: "10px" }}>
                                    <h2 className="text-xl font-medium text-blue-400 mb-10">Asteroids - NeoWs (Near Earth Object Web Service) </h2>
                                </td>
                                <td style={{ padding: "10px" }}>
                                    <p className="text-base font-light text-white text-justify ml-3 mb-10">This page showcases information about near-Earth asteroids detected by NASA. It utilizes data from the NASA Near Earth Object (NEO) API to fetch details about asteroids that are close to Earth on the current day. 
                                    The page displays various attributes of each asteroid, such as its name, absolute magnitude, estimated diameter, closest approach date, relative velocity, and miss distance from Earth. Users can view this data in a visually organized format, allowing for easy understanding of the characteristics of these celestial bodies. </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <hr className="border-white border-t-1 mt-10 mb-8" />
            </div>
            <Footer />
        </>
    );
};

export default About;
