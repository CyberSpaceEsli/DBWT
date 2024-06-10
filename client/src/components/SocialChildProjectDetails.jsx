import 'leaflet/dist/leaflet.css'
import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet';
import POIPink from '../assets/POI_pink_400.png'
import PropTypes from 'prop-types';
import FavFacilityButton from './FavFacilityButton';


export default function SocialChildProjectDetails({ profileId, project }) {

  //customIcon for socialChildProject
  const customIcon = new Icon({
    iconUrl: POIPink,
    iconSize: [25, 25],
    iconAnchor: [10, 25],
    popupAnchor: [3, -23]
  })

  var projectName = project.TRAEGER
  var lng = project.Y
  var lat = project.X
 
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

SocialChildProjectDetails.propTypes = {
  profileId: PropTypes.string,
  project: PropTypes.any.isRequired
}