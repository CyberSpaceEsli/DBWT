import 'leaflet/dist/leaflet.css'
import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet';
import POIBlue from '../assets/POI_blue_400.png'
import PropTypes from 'prop-types';


export default function KindergardenDetails({ kindergarden }) {

  //customIcon for schools
  const customIcon = new Icon({
    iconUrl: POIBlue,
    iconSize: [25, 25],
    iconAnchor: [10, 25],
  })

 
  return (
        <Marker
        icon={customIcon}
        position={[kindergarden.Y, kindergarden.X]} >
        <Popup>
            <strong>{kindergarden.BEZEICHNUNG}</strong><br />
            Art: {kindergarden.ART},<br />
            Tel.: {kindergarden.TELEFON},<br />
            E-Mail: {kindergarden.EMAIL}, <br />
            Straße: {kindergarden.STRASSE},<br />
            Plz: {kindergarden.PLZ},
            Ort: {kindergarden.ORT}
        </Popup>
        </Marker>
  );
}

KindergardenDetails.propTypes = {
  kindergarden: PropTypes.any.isRequired
}