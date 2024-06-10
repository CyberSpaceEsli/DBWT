import PropTypes from 'prop-types';
import { useState } from "react"
import FavFacilityDisplayName from './FavFacilityDisplayName';

export default function FavFacilityButton({ profileId, facilityName, lat, lng }) {
  const [favFacility, setFavFacility] = useState({ name: facilityName, lat: lat, lng: lng });

  function handleSubmitFavFacility(e) {
    e.preventDefault();

  // Check if favFacility is present //@TODO further progress find out why favFacility in has length 0
     fetch(`http://localhost:3000/api/v1/profile/${profileId}`)
      .then(res => res.json())
      .then(profile => {
        if (profile.favFacility && profile.favFacility.length > 0) {
          updateFavFacility();
        } else {
          createFavFacility();
        }
     });
}

  const createFavFacility = async () => {

    const res = await fetch(`http://localhost:3000/api/v1/profile/${profileId}/favfacility`, {
          method: 'POST',
          body: JSON.stringify({name: facilityName, lat: lat, lng: lng}),
          headers: {
            'Content-Type': 'application/json'
          }
      });

    const json = await res.json();
    console.log("POST")

    if (!res.ok) {
        console.error('Failed to fetch address:', res.statusText);
        setFavFacility(favFacility.name = '')
        setFavFacility(favFacility.lat = 0)
        setFavFacility(favFacility.lng = 0)
    }

    if (res.ok) {
        setFavFacility({ facilityName, lat, lng })
        console.log("favLatCreate",  favFacility.name)
        console.log("favLngCreate", favFacility.lat)
        console.log("favNameCreate", favFacility.lng)

        console.log('successfully created fav facility', json)
    }

  }

  const updateFavFacility = async () => {

     const res = await fetch(`http://localhost:3000/api/v1/profile/${profileId}/favfacility`, {
          method: 'PUT',
          body: JSON.stringify({name: facilityName, lat: lat, lng: lng}),
          headers: {
            'Content-Type': 'application/json'
          }
      });

    const json = await res.json();
  console.log("PUT")

    if (!res.ok) {
        console.error('Failed to fetch address:', res.statusText);
        setFavFacility(favFacility.name = '')
        setFavFacility(favFacility.lat = 0)
        setFavFacility(favFacility.lng = 0)
    }

    if (res.ok) {
        setFavFacility({ facilityName, lat, lng })
        console.log("favLatCreate",  favFacility.name)
        console.log("favLngCreate", favFacility.lat)
        console.log("favNameCreate", favFacility.lng)

        console.log('successfully updated fav facility', json)
    }
   }

  return (
    <div>
        <button onClick={handleSubmitFavFacility} type="button" label="Fav_Facility" title="Favourite Facility" className="h-8 w-48 px-1.5 rounded bg-indigo-600 text-white mb-3 hover:bg-indigo-500">Favorite Einrichtung speichern</button><br />
        <div className="hidden">
        <FavFacilityDisplayName facilityName={facilityName} />
        </div>
    </div>
  )
}

FavFacilityButton.propTypes = {
  profileId: PropTypes.string,
  facilityName: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number
}