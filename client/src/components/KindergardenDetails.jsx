import 'leaflet/dist/leaflet.css'
import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet';
import POIBlue from '../assets/POI_blue_400.png'
import PropTypes from 'prop-types';
import FavFacilityButton from './FavFacilityButton';

export default function KindergardenDetails({ profileId, kindergarden }) {

  //customIcon for schools
  const customIcon = new Icon({
    iconUrl: POIBlue,
    iconSize: [25, 25],
    iconAnchor: [10, 25],
    popupAnchor: [3, -23]
  })

  var kindergardenName = kindergarden.BEZEICHNUNG
  var lng = kindergarden.Y
  var lat = kindergarden.X

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
            Ort: {kindergarden.ORT}
        </Popup>
        </Marker>
  );
}

KindergardenDetails.propTypes = {
  profileId: PropTypes.string,
  kindergarden: PropTypes.any.isRequired
}