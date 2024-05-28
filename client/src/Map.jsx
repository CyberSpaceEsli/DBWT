import './App.css'
import 'leaflet/dist/leaflet.css'
import { useState, useEffect } from "react";
import SchoolDetails from './SchoolDetails.jsx'
import { MapContainer, TileLayer} from 'react-leaflet'
import PropTypes from 'prop-types';

export default function Map({ showSchoolDetails }) {
  const [schools, setSchools] = useState(null);

  //only triggered once on compoent load due to []
  useEffect(() => {
    // Fetch school data from the server

  const fetchSchools = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/schools/all')
        if (!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json()
        console.log("JSON", json)
        setSchools(json);
      } catch (err) {
        console.error('Error fetching data:', err);
      }

    }   
    
    fetchSchools() 
  }, []);

  return (
   <div id="mapAnchor" className="flex justify-center items-center mt-20 md:container md:mx-auto md:p-6 rounded-lg bg-indigo-50 h-[400px] md:h-[550px] lg:h-[650px]">
    <MapContainer className="rounded-lg" center={[50.8254, 12.9103]} zoom={12} scrollWheelZoom={false}>
        <TileLayer 
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       
      {console.log("Schulen", schools)}
      {showSchoolDetails && schools && schools.map((school, index) => (
          <SchoolDetails school={school} key={index}/>
      ))}
    </MapContainer>
   </div>
  );
}

Map.propTypes = {
  showSchoolDetails: PropTypes.bool.isRequired,
};