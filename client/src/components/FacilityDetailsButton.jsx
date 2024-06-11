import { useState } from 'react';
import PropTypes from 'prop-types';


export default function FacilityDetailsButton({ lat , lng }) {
    const [facilityDetails, setFacilityDetails] = useState(null)
    const [toggleFacilityDetails, setToggleFacilityDetails] = useState(false)
  
    const getFacilityDetails = async () => {
      const details = await fetchFacilityDetails(lng, lat);
      setFacilityDetails(details);
      setToggleFacilityDetails(!toggleFacilityDetails);
    };

  const fetchFacilityDetails = async (lat, lng) => {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=[1]`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {
        const json = await response.json();
        return json;
      }
    } catch (error) { 
        console.error('Error fetching facility details:', error);
        return null;
    }
  };

  const renderFacilityDetails = () => {

    if (!facilityDetails) return null;

    const { place_id, type, place_rank, importance, lat, lon } = facilityDetails;

    return (
      <div>
        <p>
          OSM ID: {place_id} <br/>
          Klassifikation: {type} <br/>
          Platzierung: {place_rank} <br/>
          Gewichtung: {importance} <br/>
          Breitengrad: {lat} <br/>
          Längengrad: {lon} <br/>
        </p>
      </div>
    );
  };

  /* <pre>{JSON.stringify(facilityDetails, null, 2)}</pre> {renderFacilityDetails()} */

  return (
        <div>
            <br />
            <button onClick={() => getFacilityDetails(lat, lng)} className="underline text-indigo-600 text-md">POI Informationen</button>
             <br />
             {facilityDetails && toggleFacilityDetails &&(
                <div>
                  <h3 className="mt-2 mb-2 font-semibold">Weitere Informationen zur Institution:</h3>
              
                  {renderFacilityDetails()}
                </div>
              )}
        </div>
  );
}

FacilityDetailsButton.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number
}
