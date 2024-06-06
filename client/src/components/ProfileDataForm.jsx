import { useState } from 'react';
import PropTypes from 'prop-types';
import ProfileDataDisplay from './ProfileDataDisplay.jsx'

export default function ProfileData({ isAuthenticated, profileId }) {
    const [newStreet, setStreet] = useState('')
    const [newCity, setCity] = useState('Chemnitz')
    const [newPlz, setPLZ] = useState('')
    const [newUsername, setNewUsername] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordChange, setPasswordChange] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
  

    var username;
    var street;
    var city;
    var plz;

    if(isAuthenticated) {
      username = localStorage.username;
      console.log("username", username);
    }
   
    const togglePasswordChange = () => {
      setPasswordChange(!passwordChange);
    };

     const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmitProfile = async (e) => {
      e.preventDefault();

         if (newPassword !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        const res = await fetch('http://localhost:3000/api/v1/profile/' + profileId, {
          method: 'PUT',
          body: JSON.stringify({username: newUsername, password: newPassword}),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const json = await res.json()


       if(!res.ok) {
        setError(json.error)
        console.log("err",error);
       }

        if (res.ok) {
          setNewUsername('')
          setNewPassword('')
          setConfirmPassword('')
          setError(null)
          console.log("new password:", json.password)
          localStorage.setItem('username', json.username);
        }
    };

     const handleSubmitAddress = async (e) => {
      e.preventDefault();

         if (newPassword !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        const res = await fetch('http://localhost:3000/api/v1/profile/' + profileId + '/homeaddress', {
          method: 'POST',
          body: JSON.stringify({street: newStreet, city: newCity, zip: newPlz}),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const json = await res.json()


       if(!res.ok) {
        setError(json.error)
        console.log("err",error);
       }

        if (res.ok) {
          setStreet('')
          setCity('')
          setPLZ('')
          setError(null)
          localStorage.setItem('street', json.street);
          localStorage.setItem('city', json.city);
          localStorage.setItem('plz', json.zip);
          console.log("street:", json.street)
        }
    };

  return (
    <div className="overflow-hidden bg-white">
        <form className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="flex justify-center lg:pr-8">
        <div className="max-w-2xl">

          <h2 className="text-sm font-semibold leading-7 text-indigo-600">Persönliche Daten</h2>
          <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nehmen Sie weitere Einstellungen an Ihrem Profil vor.</p>

          <div className="my-8">

            <div className="sm:col-span-4 mb-12">
              <p className="block text-xl font-medium leading-6 text-gray-900">
                Aktuell angemeldet als Nutzer <span className="font-semibold text-red-400">{username}</span>.
              </p>
            </div>

            <p className="text-md font-semibold tracking-tight text-gray-900 sm:text-xl mb-5">Ihr Profil bearbeiten:</p>

            <div className="sm:col-span-3 mb-5">
              <label htmlFor="new-username" className="block text-sm font-medium leading-6 text-gray-900">
                  Username umbennen
              </label>

              <div className="flex items-center justify-center">
                  <div className="w-full xl:grid xl:grid-cols-3 xl:gap-4">
                    <input
                      type="text"
                      name="new-username"
                      id="new-username"
                      onChange={ (e) => setNewUsername(e.target.value) }
                      value={newUsername}
                      autoComplete="new-username"
                      className="xl:col-span-2 block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <button
                        type="button"
                        onClick={handleSubmitProfile}
                        className="mt-4 xl:mt-0 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Speichern
                    </button>
                  </div>
              </div>
            </div>

            <button type="button" onClick={togglePasswordChange} className="mt-4 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Passwort ändern</button>

          {passwordChange && (
           <div className="sm:col-span-2 sm:col-start-1">

             <label htmlFor="password-user" className="mt-5 block text-sm font-medium leading-6 text-gray-900">
                    Neues Passwort eingeben
              </label>  
             <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password-user"
                onChange={ (e) => setNewPassword(e.target.value) }
                value={newPassword}
                autoComplete="password-user"
                className="w-full xl:w-96 block rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />



              <label htmlFor="password-user-check" className="mt-5 block text-sm font-medium leading-6 text-gray-900">
                    Passwort bestätigen
              </label>

              <div className="flex items-center justify-center">
                <div className="w-full mt-2 xl:grid xl:grid-cols-3 xl:gap-4">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password-user-check"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        id="password-user-check"
                        autoComplete="password-user-check"
                        className="xl:col-span-2 w-full block rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    <button
                      type="button"
                      onClick={handleSubmitProfile}
                      className="mt-4 xl:mt-0 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                      Speichern
                      </button>

                    <div className="mt-4 flex items-center">
                        <input
                            type="checkbox"
                            id="show-password"
                            checked={showPassword}
                            onChange={toggleShowPassword}
                            className="mr-2"
                            disabled={!newPassword}
                        />
                        <label htmlFor="show-password" className="text-sm leading-6 text-gray-900">
                            Show Password
                        </label>
                    </div>
                    {error && <div className="error text-red-400">{error}</div>}
                  </div>
              </div>

            </div>
          )}



            <p className="mt-10 text-md font-semibold tracking-tight text-gray-900 sm:text-xl mb-5">Ihre Heimadresse festlegen:</p>

            <div className="col-span-full mb-10">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Straße
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  onChange={ (e) => setStreet(e.target.value) }
                  value={street}
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1 mb-10">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Stadt
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  onChange={ (e) => setCity(e.target.value) }
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={city}
                />
              </div>
            </div>

            <div className="sm:col-span-2 mb-10">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                PLZ / Postleitzahl
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  onChange={ (e) => setPLZ(e.target.value) }
                  value={plz}
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>


      <div className="lg:mt-12 flex items-center lg:justify-end gap-x-6">
        <button
          type="button"
          onClick={handleSubmitAddress}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Speichern
        </button>
       </div>

       <ProfileDataDisplay username={username} profileId={profileId} isAuthenticated={isAuthenticated} street={street} plz={plz} city={city} />

        </div>
      </div>
    </form>
    </div>
  )
}

ProfileData.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  profileId: PropTypes.string.isRequired
};