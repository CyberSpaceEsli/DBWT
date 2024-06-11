import { useState } from 'react';
import PropTypes from 'prop-types';


export default function FacilityDetailsButton({ lat , lng }) {
    const [facilityDetails, setFacilityDetails] = useState(null)
  
    const getFacilityDetails = async () => {
      const details = await fetchFacilityDetails(lng, lat);
      getFacilityDetails(details);
    };

  const fetchFacilityDetails = async (lat, lng) => {
  const url = `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=18&addressdetails=[1]`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    if (response.ok) {
      const json = await response.json();
      setFacilityDetails(json);
      console.log('Test',facilityDetails);
      return json;
    }
  } catch (error) { 
    console.error('Error fetching school details:', error);
    return null;
  }
};
  return (
        <div>
            <br />
            <button onClick={getFacilityDetails} className="underline text-indigo-600 text-md">Mehr POI Informationen</button>
             <br />
        </div>
  );
}

FacilityDetailsButton.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number
}
