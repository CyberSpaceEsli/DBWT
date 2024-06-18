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
  const [metadata, setMetadata] = useState(null);

  var kindergardenName = kindergarden.BEZEICHNUNG
  var lng = kindergarden.Y
  var lat = kindergarden.X

  useEffect(() => {
    const getFavFacility = async () => {
      const fetchedFavFacility = await fetchProfileData(profileId);
      setFavFacility(fetchedFavFacility);
    };
    getFavFacility();


    const fetchXMLDataKindergarden = async () => {
      try {
        const response = await fetch('https://www.arcgis.com/sharing/rest/content/items/7bac27e65a9a49abacbe6bfc06c8f75a/info/metadata/metadata.xml');
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

    fetchXMLDataKindergarden().then(data => {
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
    return (lat === favFacility?.lat && lng === favFacility?.lng) ? FavFacility : POIBlue ;
  }
  const iconPath = setFavFacilityIcon();

  //customIcon for kindergarden
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
            <strong>{kindergarden.BEZEICHNUNG}</strong><br />
            Tel.: {kindergarden.TELEFON},<br />
            E-Mail: {kindergarden.EMAIL}, <br />
            Straße: {kindergarden.STRASSE} {kindergarden.HAUSBEZ} ,<br />
            Plz: {kindergarden.PLZ},
            Ort: {kindergarden.ORT} <br />
            <FavFacilityButton facilityName={kindergardenName} lat={lat} lng={lng} profileId={profileId}/>
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

KindergardenDetails.propTypes = {
  profileId: PropTypes.string,
  kindergarden: PropTypes.any.isRequired
}