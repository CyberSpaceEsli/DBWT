import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import FavFacilityDisplayName from './FavFacilityDisplayName';

export default function ProfileDataDisplay({ profileId, profile, username, isAuthenticated }) { 
      const [address, setAddress] = useState({ street: '', city: '', zip: 0 });
      const [favFacility, setFavFacility] = useState('');

     useEffect(() => {
      const fetchProfileData = async () => {
        const res = await fetch(`http://localhost:3000/api/v1/profile/${profileId}`);
          if (res.ok) {
            const json = await res.json();
            return json;
          } else {
            console.error('Failed to fetch profile:', res.statusText);
            return null;
          }
      };

      const getAddress = async () => {

        const res = await fetch(`http://localhost:3000/api/v1/profile/${profileId}/homeaddress`);

        if (res.ok) {
          const json = await res.json();
          setAddress(json);
          localStorage.setItem('street', json.street);
          localStorage.setItem('city', json.city);
          localStorage.setItem('plz', json.zip);
        }
      };

      const getFavFacility = async () => {

          const res = await fetch(`http://localhost:3000/api/v1/profile/${profileId}/favfacility`)

          const json = await res.json();

          if (!res.ok) {
            console.error('Failed to fetch favFacility:', res.statusText);
          }

          if (res.ok && json.favFacility && json.favFacility.length > 0) {
            const facilityName = json.favFacility
            .filter(facility => facility.name) // Ensure name is defined
            .map(facility => facility.name);
            
            if (facilityName.length > 0) {
              setFavFacility(facilityName[0]);
            } else {
              setFavFacility('');
            }
        }

      }

      fetchProfileData();

      if (profileId) {
        if (profile.favFacility && profile.favFacility.length > 0) {
          getFavFacility();
        }
        getAddress();
      }

      }, [profileId, favFacility, profile]);

    if(isAuthenticated) {
      username = localStorage.username;
    }


  const handleDeleteAddress = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3000/api/v1/profile/${profileId}/homeaddress`, {
          method: 'DELETE'
        })
    
    const json = await res.json()

    if (!res.ok) {
        console.error('Failed to fetch address:', res.statusText);
    }

    if (res.ok) {
      setAddress('')
      localStorage.removeItem('street');
      localStorage.removeItem('city');
      localStorage.removeItem('plz');
      console.log('successfully deleted address', json)
    }

  }

   const handleDeleteFavFacility = async (e) => {
      e.preventDefault();

          const res = await fetch(`http://localhost:3000/api/v1/profile/${profileId}/favfacility`, {
            method: 'DELETE'
          })
        
          const json = await res.json()

          if (!res.ok) {
              console.error('Failed to fetch favFacility:', res.statusText);
          }

          if (res.ok) {
            setFavFacility('');
            console.log('successfully deleted favFacility', json);
          }

      }

  return (
    <div className="mt-10 border-t border-slate-300">
       <div href="#" className="mt-8 block p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-indigo-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ihre gespeicherten Daten zum Profil: {username}.</h5><br />
          
          <div className="mt-2 grid gap-16 grid-cols-2 items-center">
          <p className="font-semibold ">Lieblingseinrichtung:</p> 
          <div className="flex justify-end">
                  <button onClick={handleDeleteFavFacility} className="flex items-center cursor-pointer w-6 h-6 rounded-full bg-indigo-600 justify-center" title="Löschen">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" text-white h-3.5 w-3.5 hover:pointer-cursor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </div>
          </div>

          {favFacility ? (
          <FavFacilityDisplayName facilityName={favFacility} />
          ) : (
            <p id="facility" className="mt-2 block text-sm leading-6 text-gray-900">Keine Lieblingseinrichtung ausgewählt.</p>
          )}
          {console.log("BBB:", favFacility)}

        <div className="mt-4 mb-4 border-t border-slate-300"></div>

         <div className="mt-2 grid gap-16 grid-cols-2 items-center">
            <p className="font-semibold max-w-full">Heimadresse: </p>
            <div className="flex justify-end">
                  <button className="flex items-center cursor-pointer w-6 h-6 rounded-full bg-indigo-600 justify-center" onClick={handleDeleteAddress} title="Alles löschen">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" text-white h-3.5 w-3.5 hover:pointer-cursor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </div>
         </div>

         {address.street && address.city && address.zip ? (
         <div>
            <p id="street" className="block text-sm leading-6 text-gray-900 pr-4">{address.street}</p>
            <p id="city" className="block text-sm leading-6 text-gray-900">{address.city}</p>
            <p id="plz" className="block text-sm leading-6 text-gray-900">{address.zip}</p>
          </div> 
         ) : (
          <p id="address" className="mt-2 block text-sm leading-6 text-gray-900">Keine Adresse angegeben.</p>
         )}

        </div>
    </div>
  )
}

ProfileDataDisplay.propTypes = {
    username: PropTypes.string,
    isAuthenticated: PropTypes.bool,
    profileId: PropTypes.string,
    profile: PropTypes.any,
    street: PropTypes.string,
    city: PropTypes.string,
    plz: PropTypes.number
};
