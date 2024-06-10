import PropTypes from 'prop-types';

export default function FavFacilityButton({ profileId, profile, facilityName, lat, lng }) {
  console.log("prooooofil:", profileId)

  var favFacilityName;
  var favFacilityLat;
  var favFacilityLng;


  function handleSubmitFavFacility() {
console.log("Profile", profile)

     // Check if favFacility is present //@TODO further progress find out why favFacility in has length 0
    if (profile.favFacility.length > 0) {
        updateFavFacility();
    } else {
        createFavFacility();
    }
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
    }

    if (res.ok) {
        favFacilityName = facilityName
        favFacilityLat = lat
        favFacilityLng = lng
        console.log("favLatCreate",  favFacilityName)
        console.log("favLngCreate", favFacilityLat)
        console.log("favNameCreate", favFacilityLng)

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
    }

    if (res.ok) {
        favFacilityName = facilityName
        favFacilityLat = lat
        favFacilityLng = lng
        console.log("favLatNew",  favFacilityName)
        console.log("favLngNew", favFacilityLat)
        console.log("favNameNew", favFacilityLng)

        console.log('successfully updated fav facility', json)
    }
   }
  

  return (
    <div>
        <button onClick={handleSubmitFavFacility} type="button" label="Fav_Facility" title="Favourite Facility" className="h-8 w-48 px-1.5 rounded bg-indigo-600 text-white mb-3 hover:bg-indigo-500">Favorite Einrichtung speichern</button><br />
     </div>
  )
}

FavFacilityButton.propTypes = {
  profile: PropTypes.any,
  profileId: PropTypes.string,
  facilityName: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number
}