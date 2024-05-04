import { useEffect, useState } from "react";
import CoNavbar from "../../components/Navbar/CoNavbar";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import axios from "axios";
import bgImage from "../../assets/SpaceDoodle2.gif";

const MarsRover = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [roverPhotos, setRoverPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photoDetails, setPhotoDetails] = useState(null);
  const [totalImages, setTotalImages] = useState(0);
  const [selectedCamera, setSelectedCamera] = useState(""); // State to hold selected camera
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
    async function fetchMissionManifest() {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=tDSu7FUQhiJYYPIOKdUzeXvHSJnmjNhYT0e4I65B`
        );
        if (response.data.photo_manifest) {
          const data = response.data.photo_manifest;
          setTotalImages(response.data.photo_manifest.total_photos);
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching mission manifest:", error);
      }
    }

    fetchMissionManifest();
  }, []);

  useEffect(() => {
    async function fetchRoverPhotos() {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=tDSu7FUQhiJYYPIOKdUzeXvHSJnmjNhYT0e4I65B`
        );
        setRoverPhotos(response.data.photos);
      } catch (error) {
        console.error("Error fetching Mars Rover photos:", error);
      }
    }

    fetchRoverPhotos();
  }, []);

  const handlePhotoClick = async (photo) => {
    setSelectedPhoto(photo);
    try {
      const response = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/photos/${photo.id}?api_key=tDSu7FUQhiJYYPIOKdUzeXvHSJnmjNhYT0e4I65B`
      );
      if (response.data.photo) {
        setPhotoDetails(response.data.photo);
      } else {
        console.error("Invalid photo data structure:", response.data);
        setPhotoDetails(null);
      }
    } catch (error) {
      console.error("Error fetching photo details:", error);
      setPhotoDetails(null);
    }
  };

  const handleClosePopup = () => {
    setSelectedPhoto(null);
    setPhotoDetails(null);
  };

  // Filter rover photos by selected camera
  const filteredPhotos = selectedCamera
    ? roverPhotos.filter((photo) => photo.camera.name === selectedCamera)
    : roverPhotos;

  return (
    <>
      <Navbar userInfo={userInfo} />
      <CoNavbar />
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-blue-300 mt-10 ml-7">
            Mars Rover Photos
          </h1>
          <p className="text-xl font-normal italic text-gray-400 mt-10 mr-9">
            Total Images: {totalImages}
          </p>
        </div>

        <div className="flex mt-8 items-center space-x-5" style={{ marginLeft: "550px" }}>
          <p className="text-white font-extralight">Select a Camera:</p>
          <select
            value={selectedCamera}
            onChange={(e) => setSelectedCamera(e.target.value)}
            className="text-base font-normal bg-slate-700 opacity-55 text-white w-3/12 h-8 pl-2 rounded-md"
          >
            <option value="">All Cameras</option>
            {[...new Set(roverPhotos.map((photo) => photo.camera.name))].map(
              (cameraName) => (
                <option key={cameraName} value={cameraName}>
                  {cameraName}
                </option>
              )
            )}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mr-7 mb-10 ml-7 mt-11">
          {filteredPhotos.map((photo) => (
            <img
              key={photo.id}
              src={photo.img_src}
              alt={`Mars Rover Photo ${photo.id}`}
              className="w-full h-auto"
              onClick={() => handlePhotoClick(photo)}
            />
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <div
            className="p-4 rounded-md w-4/5 relative"
            style={{
              marginTop: "190px",
              marginBottom: "40px",
              height: "500px",
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
            }}
          >
            <button className="absolute top-7 right-10 text-white" onClick={handleClosePopup}>
              <i className="fa-solid fa-circle-xmark text-3xl" style={{ color: "#151e2e" }}></i>
            </button>
            {photoDetails && (
              <div>
                <h2 className="text-5xl font-bold mb-4 mt-5 ml-7 text-gray-900">
                  Mars Perseverance Sol: {photoDetails.id}
                </h2>
                <div className="text-base ml-8 mt-7 flex space-x-72">
                  <div>
                    <p className="mt-0">
                      <strong>Mars sol:</strong> {photoDetails.sol}
                    </p>
                    <p className="mt-3">
                      <strong>Camera abbreviation:</strong>{" "}
                      {photoDetails.camera.name}
                    </p>
                    <p className="mt-3">
                      <strong>Camera full name:</strong>{" "}
                      {photoDetails.camera.full_name}
                    </p>
                    <p className="mt-3">
                      <strong>Earth date:</strong> {photoDetails.earth_date}
                    </p>
                    <p className="mt-3">
                      <strong>Rover name:</strong> {photoDetails.rover.name}
                    </p>
                    <p className="mt-3 ml-6">
                      <strong>Landing date:</strong>{" "}
                      {photoDetails.rover.landing_date}
                    </p>
                    <p className="mt-3 ml-6">
                      <strong>Launching date:</strong>{" "}
                      {photoDetails.rover.launch_date}
                    </p>
                    <p className="mt-3 ml-6">
                      <strong>Status:</strong> {photoDetails.rover.status}
                    </p>
                    <p className="mt-3 ml-6">
                      <strong>Max-sol:</strong> {photoDetails.rover.max_sol}
                    </p>
                    <p className="mt-3 ml-6">
                      <strong>Max date:</strong> {photoDetails.rover.max_date}
                    </p>
                  </div>
                  <div>
                    <p className="mt-0 mb-5">
                      <strong>Cameras:</strong>
                    </p>
                    <ul className="space-y-4">
                      {photoDetails.rover.cameras.map((camera) => (
                        <li key={camera.name}>
                          <strong>{camera.name}:</strong> {camera.full_name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MarsRover;
