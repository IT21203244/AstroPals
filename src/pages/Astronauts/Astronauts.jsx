import Navbar from '../../components/Navbar/Navbar';
import CoNavbar from '../../components/Navbar/CoNavbar';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import astro1 from '../../assets/astro1.jpg'
import astro2 from '../../assets/astro2.webp'
import astro3 from '../../assets/astro3.webp'
import astro4 from '../../assets/astro4.jpg'
import astro5 from '../../assets/astro5.webp'
import astro6 from '../../assets/astro6.webp'
import astro7 from '../../assets/astro7.jpg'
import bgImage from '../../assets/SpaceDoodle2.gif'

const astronautsData = [
    { image: astro1, name: "Loral O'Hara", 
        details: {
            birthday: "May 3, 1983",
            hometown: "Sugar Land, Texas",
            spaceflights: "Expedition 69/70",
            factoid: "Loral was a NASA intern during college. NASA astronaut Loral O’Hara is a Soyuz flight engineer and an Expedition 69/70 flight engineer. A flight engineer has many jobs. These can include performing experiments, doing spacewalks, and fixing things on the space station. Before becoming an astronaut, Loral worked as a research engineer on underwater vehicles. She also has her private pilot’s license. This is her first trip to space."
    } },
    { image: astro2, name: "Jasmin Moghbeli",
        details: {
            birthday: "June 24, 1983",
            hometown: "Baldwin, New York",
            spaceflights: "Expedition 69/70",
            factoid: "Jasmin likes to dance. Astronaut Jasmin Moghbeli is the Crew-7 mission commander and an Expedition 69/70 flight engineer. A flight engineer has many jobs. These can include performing experiments, doing spacewalks, and fixing things on the space station. When she was in high school, Jasmin went to Space Camp. Before becoming an astronaut, she was a helicopter pilot and test pilot in the U.S. Marine Corps. This is her first trip to space."
    } },
    { image: astro3, name: "Konstantin Borisov",
        details: {
            birthday: "Aug. 14, 1984",
            hometown: "Zhukovsky, Russia",
            spaceflights: "Expedition 69/70",
            factoid: "Konstantin likes to freedive. This is when you hold your breath and dive deep underwater. Cosmonaut Konstantin Borisov is a Crew-7 mission specialist and an Expedition 69/70 flight engineer. A flight engineer has many jobs. These can include performing experiments, doing spacewalks, and fixing things on the space station. Konstantin is flying for Roscosmos. This is his first trip to space."
    } },
    { image: astro4, name: "Satoshi Furukawa",
        details: {
                birthday: "Born in 1964",
                hometown: "Kanagawa, Japan",
                spaceflights: "Expedition 28/29, Expedition 69/70",
                factoid: "In 2011, Satoshi launched on a Soyuz spacecraft. He spent 165 days living and working on the space station. Astronaut Satoshi Furukawa is a Crew-7 mission specialist and an Expedition 69/70 flight engineer. A flight engineer has many jobs. These can include performing experiments, doing spacewalks, and fixing things on the space station. Satoshi is flying for JAXA (Japan Aerospace Exploration Agency). This is his second visit to the space station. Before becoming an astronaut, he was a doctor."
    } },
    { image: astro5, name: "Oleg Konenenko",
        details: {
            birthday: "June 21, 1964",
            hometown: "Türkmenabat, Turkmenistan",
            spaceflights: "Expedition 17, Expedition 30/31, Expedition 44/45, Expedition 58/59, Expedition 69/70/71",
            factoid: "Oleg wanted to be a cosmonaut since he was a little boy. Cosmonaut Oleg Konenenko is the Soyuz commander and an Expedition 69/70/71 flight engineer. A flight engineer has many jobs. These can include performing experiments, doing spacewalks, and fixing things on the space station. Oleg is flying for Roscosmos. This is his fifth trip to space."
    } },
    { image: astro6, name: "Nikolai Chub",
        details: {
                birthday: "June 10, 1984",
                hometown: "Novocherkassk, Russia",
                spaceflights: "Soyuz TMA-18M/Soyuz TMA-16M, Expedition 69/70",
                factoid: "Nikolai has done more than 200 parachute jumps. Cosmonaut Nikolai Chub is a Soyuz flight engineer and an Expedition 69/70/71 flight engineer. A flight engineer has many jobs. These can include performing experiments, doing spacewalks, and fixing things on the space station. Nikolai is flying for Roscosmos. This is his first trip to space."
    } },
    { image: astro7, name: "Andreas Mogensen",
        details: {
            birthday: "Nov. 2, 1976",
            hometown: "Copenhagen, Denmark",
            spaceflights: "Expedition 69/70",
            factoid: "Andreas is the first person from Denmark to fly in space. Astronaut Andreas Mogensen is the Crew-7 mission pilot and the commander for Expedition 70. The commander is in charge of the mission and makes sure it is a success. Andreas is flying for ESA (European Space Agency). This is his second visit to the space station. Andreas got to pick the zero-g indicator for their flight. This small object floats to let the crew know when they have reached space. He picked something his three kids would like."
    } }
];


const Astronauts = () => {
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();

    const [selectedAstronaut, setSelectedAstronaut] = useState(null);

    // Function to handle click on an astronaut card
    const handleAstronautClick = (astronaut) => {
        setSelectedAstronaut(astronaut);
    };

    // Function to close the pop-up
    const handleClosePopup = () => {
        setSelectedAstronaut(null);
    };

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
        
        <div className="flex flex-col items-center pb-20"> 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-around mt-20">
                {astronautsData.slice(0, 3).map((astronaut, index) => (
                    <div key={index} className="w-80 h-96 bg-gray-300 mr-8 relative cursor-pointer" onClick={() => handleAstronautClick(astronaut)}>
                        <img src={astronaut.image} alt={astronaut.name} className="w-full h-full object-cover" />
                        <p className="absolute bottom-0 left-0 right-0 bg-slate-800 text-white font-medium h-10 text-center pt-2">{astronaut.name}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-around mt-20">
                {astronautsData.slice(3, 6).map((astronaut, index) => (
                    <div key={index} className="w-80 h-96 bg-gray-300 mr-8 relative cursor-pointer" onClick={() => handleAstronautClick(astronaut)}>
                        <img src={astronaut.image} alt={astronaut.name} className="w-full h-full object-cover" />
                        <p className="absolute bottom-0 left-0 right-0 bg-slate-800 text-white font-medium h-10 text-center pt-2">{astronaut.name}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-20">
                {astronautsData.slice(6).map((astronaut, index) => (
                    <div key={index} className="w-80 h-96 bg-gray-300 mr-8 relative cursor-pointer" onClick={() => handleAstronautClick(astronaut)}>
                        <img src={astronaut.image} alt={astronaut.name} className="w-full h-full object-cover" />
                        <p className="absolute bottom-0 left-0 right-0 bg-slate-800 text-white font-medium h-10 text-center pt-2">{astronaut.name}</p>
                    </div>
                ))}
            </div>

    
            {selectedAstronaut && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
                    <div className="p-4 rounded-md w-4/5 relative" style={{ marginTop: "190px", marginBottom: "40px", height: "500px", backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
                        <h2 className="text-5xl font-bold mb-4 mt-5 ml-7 text-gray-900">{selectedAstronaut.name}</h2>
                        <div className='text-xl ml-8 mt-7'>
                            <p className='mt-3'><strong>Birthday:</strong> {selectedAstronaut.details.birthday}</p>
                            <p className='mt-3'><strong>Hometown:</strong> {selectedAstronaut.details.hometown}</p>
                            <p className='mt-3'><strong>Spaceflights:</strong> {selectedAstronaut.details.spaceflights}</p>
                            <p className='text-justify mr-8 mt-3'><strong>Special Factors:</strong> {selectedAstronaut.details.factoid}</p>
                        </div>
                        <button className="absolute top-7 right-10 text-white" onClick={handleClosePopup}>
                            <i className="fa-solid fa-circle-xmark text-3xl" style={{color: "#151e2e"}}></i>
                        </button>
                    </div>
                </div>
            )}

        </div>



    </>
  )
}

export default Astronauts