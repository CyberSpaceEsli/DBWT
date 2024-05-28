import 'leaflet/dist/leaflet.css'
import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet';
import POIPurple from '../assets/POI_purple_400.png'
import PropTypes from 'prop-types';


export default function SocialTeenagerProjectDetails({ project }) {

  //customIcon for socialChildProject
  const customIcon = new Icon({
    iconUrl: POIPurple,
    iconSize: [25, 25],
    iconAnchor: [10, 25],
    popupAnchor: [3, -23]
  })

 
  return (
        <Marker
        icon={customIcon}
        position={[project.Y, project.X]} >
        <Popup>
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
  project: PropTypes.any.isRequired
}