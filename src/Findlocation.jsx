import { RxCross1 } from "react-icons/rx";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const handleGetLocation = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        window.open(url, "_blank");
      },
      (error) => {
        console.error("Error getting location:", error);
        alert("Unable to retrieve your location. Please try again.");
      }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }
};

const Findlocation = (props) => {
  return (
    <>
      <div className="top-3">
        <RxCross1
          className="my-4 font-bold text-xl cursor-pointer hover:bg-slate-200"
          onClick={props.hideSideMenu}
        />
      </div>
      <div className="relative mb-4">
        <input
          className="w-full p-2 pl-10 border  border-gray-300 rounded"
          placeholder="Search for location..."
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div className="relative mb-4">
        <div
          className="w-full p-2 pl-10 border border-gray-300 rounded cursor-pointer bg-white"
          onClick={handleGetLocation}
        >
          <div>Get Current Location</div>
          <div className="text-sm text-slate-500">using GPS</div>
        </div>
        <FaLocationDot className="absolute left-3 top-4 text-gray-400" />
      </div>
    </>
  );
};
export default Findlocation;
