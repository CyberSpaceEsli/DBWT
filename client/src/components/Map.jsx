import '../App.css'
import 'leaflet/dist/leaflet.css'
import { useState, useEffect } from "react";
import SchoolDetails from './SchoolDetails.jsx'
import KindergardenDetails from './KindergardenDetails.jsx'
import SocialChildProjectDetails from './SocialChildProjectDetails.jsx'
import SocialTeenagerProjectDetails from './SocialTeenagerProjectDetails.jsx'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import { Icon } from 'leaflet';
import HomeAddress from '../assets/POI_homeaddress.png'
import PropTypes from 'prop-types';

export default function Map({ profileId, showSchoolDetails, showKindergardenDetails, showSocialChildProjectDetails, showSocialTeenagerProjectDetails }) {
  const [schools, setSchools] = useState(null);
  const [kindergarden, setKindergarden] = useState(null);
  const [socialChildProjects, setSocialChildProjects] = useState(null);
  const [socialTeenagerProjects, setSocialTeenagerProjects] = useState(null);
  const [homeCoordinates, setHomeCoordinates] = useState(null);
  const [homeAddress, setHomeAddress] = useState(null);


  useEffect(() => {
      const fetchFacility = async (url, setter) => {
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
      }

    // Fetch address data
    const fetchAddress = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/profiles/${profileId}/homeaddress`);
        if (!response.ok) {
          throw new Error('Failed to fetch home address');
        }
        const json = await response.json();
        if (json.street && json.city && json.zip) {
          setHomeAddress(json);
          const coordinates = await geocodeAddress(json.street, json.city, json.zip);
          setHomeCoordinates(coordinates);
        }
      } catch (err) {
        console.error('Error fetching address data:', err);
      }
    };

    if(profileId) {
      fetchAddress();
    }

    fetchFacility('http://localhost:3000/api/v1/schools/all', setSchools);
    fetchFacility('http://localhost:3000/api/v1/kindergarden/all', setKindergarden);
    fetchFacility('http://localhost:3000/api/v1/socialchildprojects/all', setSocialChildProjects);
    fetchFacility('http://localhost:3000/api/v1/socialteenagerprojects/all', setSocialTeenagerProjects);

  }, [profileId]);

  // Function to fetch coordinates of home address from Nominatim
  const geocodeAddress = async (street, city, zip) => {
    const address = `${street}, ${city}, ${zip}`;
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to geocode address');
      }
      const json = await response.json();
      if (json.length > 0) {
        return {
          lat: json[0].lat,
          lon: json[0].lon,
        };
      }
      return null;
    } catch (error) {
      console.error('Error geocoding address:', error);
      return null;
    }
  };

  //customIcon for home address
  const customIcon = new Icon({
    iconUrl: HomeAddress,
    iconSize: [25, 25],
    iconAnchor: [10, 25],
    popupAnchor: [3, -23]
  })

  return (
   <div id="mapAnchor" className="flex justify-center items-center mt-20 md:container md:mx-auto md:p-6 rounded-lg bg-gray-50 h-[400px] md:h-[550px] lg:h-[650px]">
    <MapContainer className="rounded-lg" center={[50.8254, 12.9103]} zoom={12} scrollWheelZoom={false}>
        <TileLayer 
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">contributers OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      
      {/*schools*/}
      {showSchoolDetails && schools && schools.map((school, index) => (
          <SchoolDetails school={school} key={index} profileId={profileId} />
      ))}

      {/*kindergarden*/}
      {showKindergardenDetails && kindergarden && kindergarden.map((kindergarden, index) => (
          <KindergardenDetails kindergarden={kindergarden} key={index} profileId={profileId} />
        ))}

      {/*socialChildProjects*/}
      {showSocialChildProjectDetails && socialChildProjects && socialChildProjects.map((project, index) => (
          <SocialChildProjectDetails project={project} key={index} profileId={profileId} />
        ))}

       {/*socialTeenagerProjects*/}
       {showSocialTeenagerProjectDetails && socialTeenagerProjects && socialTeenagerProjects.map((project, index) => (
          <SocialTeenagerProjectDetails project={project} key={index} profileId={profileId} />
        ))}

      {homeCoordinates && (
        <Marker
        icon={customIcon}
        position={[homeCoordinates.lat, homeCoordinates.lon]} >
        <Popup>
            <strong>Mein Zuhause</strong><br />
            Straße: {homeAddress.street},<br />
            PLZ: {homeAddress.zip},
            Ort: {homeAddress.city} <br />
        </Popup>
        </Marker>
      )}
      
    </MapContainer>
   </div>
  );
}

Map.propTypes = {
  profileId: PropTypes.string,
  showSchoolDetails: PropTypes.bool.isRequired,
  showKindergardenDetails: PropTypes.bool.isRequired,
  showSocialChildProjectDetails: PropTypes.bool.isRequired,
  showSocialTeenagerProjectDetails: PropTypes.bool.isRequired
};