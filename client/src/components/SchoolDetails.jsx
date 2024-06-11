import 'leaflet/dist/leaflet.css'
import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet';
import { useEffect, useState } from 'react';
import POIRed from '../assets/POI_red_400.png'
import FavFacility from '../assets/POI_fav_facility.png'
import PropTypes from 'prop-types';
import FavFacilityButton from './FavFacilityButton';
import FacilityDetailsButton from './FacilityDetailsButton';


export default function SchoolDetails({ profileId, school }) {
  const [favFacility, setFavFacility] = useState(null);

  var schoolName = school.BEZEICHNUNG
  var lng = school.Y
  var lat = school.X

  useEffect(() => {
    const getFavFacility = async () => {
      const fetchedFavFacility = await fetchProfileData(profileId);
      setFavFacility(fetchedFavFacility);
    };
    getFavFacility();


  }, [profileId, favFacility, school.Y, school.X]);

  const fetchProfileData = async (profileId) => {
    const res = await fetch(`http://localhost:3000/api/v1/profile/${profileId}`);
      if (res.ok) {
        const json = await res.json();
        return json.favFacility.length > 0 ? json.favFacility[0] : null;
      } else {
        console.error('Failed to fetch profile:', res.statusText);
        return null;
      }
  };

  const setFavFacilityIcon = () => {
    return (lat === favFacility?.lat && lng === favFacility?.lng) ? FavFacility : POIRed ;
  }
  const iconPath = setFavFacilityIcon();

  //customIcon for schools
  const customIcon = new Icon({
    iconUrl: iconPath,
    iconSize: [25, 25],
    iconAnchor: [10, 25],
    popupAnchor: [3, -23]
  })
 
  return (
      <Marker
        icon={customIcon}
        position={[school.Y, school.X]} >
        <Popup>
           <FavFacilityButton facilityName={schoolName} lat={lat} lng={lng} profileId={profileId}/>
            <strong>{school.BEZEICHNUNG}</strong><br />
            Art: {school.ART},<br />
            Tel.: {school.TELEFON},<br />
            E-Mail: {school.EMAIL}, <br />
            Straße: {school.STRASSE},<br />
            Plz: {school.PLZ},
            Ort: {school.ORT} <br />
            Koordinaten: [{school.Y}, {school.X}]
            <FacilityDetailsButton lat={lat} lng={lng}/>
        </Popup>
      </Marker>
  );
}

SchoolDetails.propTypes = {
  profileId: PropTypes.string,
  school: PropTypes.any.isRequired
}