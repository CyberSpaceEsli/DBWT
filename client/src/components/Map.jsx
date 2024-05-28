import '../App.css'
import 'leaflet/dist/leaflet.css'
import { useState, useEffect } from "react";
import SchoolDetails from './SchoolDetails.jsx'
import KindergardenDetails from './KindergardenDetails.jsx'
import SocialChildProjectDetails from './SocialChildProjectDetails.jsx'
import SocialTeenagerProjectDetails from './SocialTeenagerProjectDetails.jsx'
import { MapContainer, TileLayer} from 'react-leaflet'
import PropTypes from 'prop-types';

export default function Map({ showSchoolDetails, showKindergardenDetails, showSocialChildProjectDetails, showSocialTeenagerProjectDetails }) {
  const [schools, setSchools] = useState(null);
  const [kindergarden, setKindergarden] = useState(null);
  const [socialChildProjects, setSocialChildProjects] = useState(null);
  const [socialTeenagerProjects, setSocialTeenagerProjects] = useState(null);


  //only triggered once on compoent load due to []
  useEffect(() => {
    // Fetch school data from the server

     const fetchData = async (url, setter) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setter(json);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData('http://localhost:3000/api/v1/schools/all', setSchools);
    fetchData('http://localhost:3000/api/v1/kindergarden/all', setKindergarden);
    fetchData('http://localhost:3000/api/v1/socialchildprojects/all', setSocialChildProjects);
    fetchData('http://localhost:3000/api/v1/socialteenagerprojects/all', setSocialTeenagerProjects);

  }, []);

  return (
   <div id="mapAnchor" className="flex justify-center items-center mt-20 md:container md:mx-auto md:p-6 rounded-lg bg-indigo-50 h-[400px] md:h-[550px] lg:h-[650px]">
    <MapContainer className="rounded-lg" center={[50.8254, 12.9103]} zoom={12} scrollWheelZoom={false}>
        <TileLayer 
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      
      {/*schools*/}
      {console.log("Schulen", schools)}
      {showSchoolDetails && schools && schools.map((school, index) => (
          <SchoolDetails school={school} key={index}/>
      ))}

      {/*kindergarden*/}
      {console.log("Kindergarden", kindergarden)}
      {showKindergardenDetails && kindergarden && kindergarden.map((kindergarden, index) => (
          <KindergardenDetails kindergarden={kindergarden} key={index}/>
        ))}

      {/*socialChildProjects*/}
      {console.log("SocialChildProjects", socialChildProjects)}  
      {showSocialChildProjectDetails && socialChildProjects && socialChildProjects.map((project, index) => (
          <SocialChildProjectDetails project={project} key={index}/>
        ))}

       {/*socialChildProjects*/}
       {console.log("SocialChildProjects", socialChildProjects)} 
       {showSocialTeenagerProjectDetails && socialTeenagerProjects && socialTeenagerProjects.map((project, index) => (
          <SocialTeenagerProjectDetails project={project} key={index}/>
        ))}

    </MapContainer>
   </div>
  );
}

Map.propTypes = {
  showSchoolDetails: PropTypes.bool.isRequired,
  showKindergardenDetails: PropTypes.bool.isRequired,
  showSocialChildProjectDetails: PropTypes.bool.isRequired,
  showSocialTeenagerProjectDetails: PropTypes.bool.isRequired
};