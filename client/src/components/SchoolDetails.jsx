import 'leaflet/dist/leaflet.css'
import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet';
import POIRed from '../assets/POI_red_400.png'
import PropTypes from 'prop-types';
import FavFacilityButton from './FavFacilityButton';


export default function SchoolDetails({ profileId, profile, school }) {

  //customIcon for schools
  const customIcon = new Icon({
    iconUrl: POIRed,
    iconSize: [25, 25],
    iconAnchor: [10, 25],
    popupAnchor: [3, -23]
  })

  var schoolName = school.BEZEICHNUNG
  var lng = school.Y
  var lat = school.X
 
  return (
        <Marker
        icon={customIcon}
        position={[school.Y, school.X]} >
        <Popup>
           <FavFacilityButton facilityName={schoolName} lat={lat} lng={lng} profileId={profileId} profile={profile}/>
            <strong>{school.BEZEICHNUNG}</strong><br />
            Art: {school.ART},<br />
            Tel.: {school.TELEFON},<br />
            E-Mail: {school.EMAIL}, <br />
            Straße: {school.STRASSE},<br />
            Plz: {school.PLZ},
            Ort: {school.ORT}
        </Popup>
        </Marker>
  );
}

SchoolDetails.propTypes = {
  profile: PropTypes.any,
  profileId: PropTypes.string,
  school: PropTypes.any.isRequired
}