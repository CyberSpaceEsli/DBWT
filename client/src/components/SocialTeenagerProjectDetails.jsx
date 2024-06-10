import 'leaflet/dist/leaflet.css'
import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet';
import { useEffect, useState } from 'react';
import POIPurple from '../assets/POI_purple_400.png'
import FavFacility from '../assets/POI_fav_facility.png'
import PropTypes from 'prop-types';
import FavFacilityButton from './FavFacilityButton';


export default function SocialTeenagerProjectDetails({ profileId, project }) {
  const [favFacility, setFavFacility] = useState(null);

  var projectName = project.TRAEGER
  var lng = project.Y
  var lat = project.X

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
    return (lat === favFacility?.lat && lng === favFacility?.lng) ? FavFacility : POIPurple ;
  }
  const iconPath = setFavFacilityIcon();

  //customIcon for socialChildProject
  const customIcon = new Icon({
    iconUrl: iconPath,
    iconSize: [25, 25],
    iconAnchor: [10, 25],
    popupAnchor: [3, -23]
  })
 
  return (
        <Marker
        icon={customIcon}
        position={[project.Y, project.X]} >
        <Popup>
            <FavFacilityButton facilityName={projectName} lat={lat} lng={lng} profileId={profileId}/>
            <strong>{project.TRAEGER}</strong><br />
            Leistung: {project.LEISTUNGEN},<br />
            Tel.: {project.TELEFON},<br />
            Straße: {project.STRASSE},<br />
            Plz: {project.PLZ},
            Ort: {project.ORT}
        </Popup>
        </Marker>
  );
}

SocialTeenagerProjectDetails.propTypes = {
  profileId: PropTypes.string,
  project: PropTypes.any.isRequired
}