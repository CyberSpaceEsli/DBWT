import 'leaflet/dist/leaflet.css'
import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet';
import { useEffect, useState } from 'react';
import POIBlue from '../assets/POI_blue_400.png'
import FavFacility from '../assets/POI_fav_facility.png'
import PropTypes from 'prop-types';
import FavFacilityButton from './FavFacilityButton';
import FacilityDetailsButton from './FacilityDetailsButton';

export default function KindergardenDetails({ profileId, kindergarden }) {
  const [favFacility, setFavFacility] = useState(null);

  var kindergardenName = kindergarden.BEZEICHNUNG
  var lng = kindergarden.Y
  var lat = kindergarden.X

  useEffect(() => {
    const getFavFacility = async () => {
      const fetchedFavFacility = await fetchProfileData(profileId);
      setFavFacility(fetchedFavFacility);
    };
    getFavFacility();
  }, [profileId, favFacility]);

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
    return (lat === favFacility?.lat && lng === favFacility?.lng) ? FavFacility : POIBlue ;
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
        position={[kindergarden.Y, kindergarden.X]} >
        <Popup>
            <FavFacilityButton facilityName={kindergardenName} lat={lat} lng={lng} profileId={profileId}/>
            <strong>{kindergarden.BEZEICHNUNG}</strong><br />
            Tel.: {kindergarden.TELEFON},<br />
            E-Mail: {kindergarden.EMAIL}, <br />
            Straße: {kindergarden.STRASSE} {kindergarden.HAUSBEZ} ,<br />
            Plz: {kindergarden.PLZ},
            Ort: {kindergarden.ORT}, <br />
            Koordinaten: [{kindergarden.Y}, {kindergarden.X}] <br />
            <FacilityDetailsButton lat={lat} lng={lng}/>
        </Popup>
        </Marker>
  );
}

KindergardenDetails.propTypes = {
  profileId: PropTypes.string,
  kindergarden: PropTypes.any.isRequired
}