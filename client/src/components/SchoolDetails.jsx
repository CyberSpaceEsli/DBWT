import 'leaflet/dist/leaflet.css'
import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet';
import POIRed from '../assets/POI_red_400.png'
import PropTypes from 'prop-types';


export default function SchoolDetails({ school }) {

  //customIcon for schools
  const customIcon = new Icon({
    iconUrl: POIRed,
    iconSize: [25, 25],
    iconAnchor: [10, 25],
  })

 
  return (
        <Marker
        icon={customIcon}
        position={[school.Y, school.X]} >
        <Popup>
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
  school: PropTypes.any.isRequired
}