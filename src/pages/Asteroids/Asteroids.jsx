import { useEffect, useState } from "react";
import CoNavbar from "../../components/Navbar/CoNavbar";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import axios from "axios";

const Asteroids = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [asteroids, setAsteroids] = useState([]);
    const [today, setToday] = useState(""); // State to hold today's date
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

    useEffect(() => {
        async function fetchAsteroidData() {
            try {
                const todayDate = new Date().toISOString().slice(0, 10); // Get today's date
                setToday(todayDate); // Set today's date in state
                const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${todayDate}&end_date=${todayDate}&api_key=tDSu7FUQhiJYYPIOKdUzeXvHSJnmjNhYT0e4I65B`);
                if (response.data && response.data.near_earth_objects) {
                    const asteroidData = Object.values(response.data.near_earth_objects);
                    const allAsteroids = asteroidData.reduce((acc, val) => acc.concat(val), []);
                    setAsteroids(allAsteroids);
                }
            } catch (error) {
                console.error("Error fetching asteroid data:", error);
            }
        }

        fetchAsteroidData();
    }, []);

    return (
        <>
            <Navbar userInfo={userInfo} />
            <CoNavbar />
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-blue-300 mt-10 ml-7">Near Earth Asteroids Today</h1>
                <h4 className="text-sm font-base text-blue-300 mt-2 ml-7">(See Asteroids near Earth)</h4>
                <p className="text-gray-500 italic text-xl font-medium mt-10" style={{marginLeft: "400px"}}>Today, on {today}, the total number of near Earth bodies are: {asteroids.length}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 ml-10 mr-10 mb-10">
                    {asteroids.map((asteroid, index) => (
                        <div key={index} className="border border-gray-300 p-5 rounded-md bg-slate-300">
                            <h2 className="text-lg font-semibold text-blue-600 text-center mb-4">Asteroid {asteroid.name}</h2>
                            <div className="text-black text-base space-y-2">
                              <p><strong>- Asteroid&rsquo;s Name:</strong> {asteroid.name}</p>
                              <p><strong>- Absolute Magnitude:</strong> {asteroid.absolute_magnitude_h}</p>
                              <p><strong>- Estimated Diameter (km):</strong> {asteroid.estimated_diameter.kilometers.estimated_diameter_min} - {asteroid.estimated_diameter.kilometers.estimated_diameter_max}</p>
                              <p><strong>- Closest Approach Date:</strong> {asteroid.close_approach_data[0].close_approach_date_full}</p>
                              <p><strong>- Relative Velocity (km/h):</strong> {asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour}</p>
                              <p><strong>- Miss Distance (km):</strong> {asteroid.close_approach_data[0].miss_distance.kilometers}</p>
                              <p className="font-medium italic text-sm pt-4">
                                **NASA Jet Propulsion Laboratory URL:{" "}
                                <a href={asteroid.nasa_jpl_url} target="_blank" rel="noopener noreferrer">
                                  {asteroid.nasa_jpl_url}
                                </a>
                              </p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Asteroids;
