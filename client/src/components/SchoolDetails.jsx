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
   const [metadata, setMetadata] = useState(null);

  var schoolName = school.BEZEICHNUNG
  var lng = school.Y
  var lat = school.X

  useEffect(() => {
    const getFavFacility = async () => {
      const fetchedFavFacility = await fetchProfileData(profileId);
      setFavFacility(fetchedFavFacility);
    };
    getFavFacility();

    const fetchXMLDataSchools = async () => {
      try {
        const response = await fetch('https://www.arcgis.com/sharing/rest/content/items/4c331993dab54b49bbc9debfc5928ec3/info/metadata/metadata.xml');
        if (!response.ok) {
          throw new Error('Failed to fetch XML data');
        }
        if (response.ok) {
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'application/xml');

        const data = {
          creaDate: xmlDoc.getElementsByTagName('CreaDate')[0]?.textContent || '',
          creaTime: xmlDoc.getElementsByTagName('CreaTime')[0]?.textContent || '',
          modDate: xmlDoc.getElementsByTagName('ModDate')[0]?.textContent || '',
          modTime: xmlDoc.getElementsByTagName('ModTime')[0]?.textContent || '',
          languageCode: xmlDoc.getElementsByTagName('languageCode')[0]?.getAttribute('value') || '',
          rpOrgName: xmlDoc.getElementsByTagName('rpOrgName')[0]?.textContent || '',
          eMailAdd: xmlDoc.getElementsByTagName('eMailAdd')[0]?.textContent || '',
          resTitle: xmlDoc.getElementsByTagName('resTitle')[0]?.textContent || '',
          identCode: xmlDoc.getElementsByTagName('identCode')[0]?.textContent || '',
        };

        return data;
        }  
      } catch (error) {
        console.error('Error fetching or parsing XML data:', error);
      }
    };

    fetchXMLDataSchools().then(data => {
      if (data) {
        setMetadata(data);
      }
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProfileData = async (profileId) => {
    const res = await fetch(`http://localhost:3000/api/v1/profiles/${profileId}`);
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
            {metadata ? (
              <div>
                <p><strong>Metadaten</strong><br />
                Erstellungs-Datum/Zeit: {metadata.creaDate};
                {metadata.creaTime}<br />
                Modifikations-Datum/Zeit: {metadata.modDate};
                {metadata.modTime}<br />
                Sprache: {metadata.languageCode}<br />
                Organization Name: {metadata.rpOrgName}<br />
                E-Mail: {metadata.eMailAdd}<br />
                Institution: {metadata.resTitle}<br />
                Datenquelle: {metadata.identCode}</p>
     
              </div>
            ) : (
              <p>Loading metadata...</p>
            )}
            <FacilityDetailsButton lat={lat} lng={lng}/>
        </Popup>
      </Marker>
  );
}

SchoolDetails.propTypes = {
  profileId: PropTypes.string,
  school: PropTypes.any.isRequired
}