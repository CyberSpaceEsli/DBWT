import { useState } from 'react';
import PropTypes from 'prop-types';

export default function ForgetPassword({ profileId }) {
  const [newPassword, setNewPassword] =  useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);


     const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

  const handleSubmitPassword = async (e) => {
      e.preventDefault();

         if (newPassword !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        const res = await fetch(`http://localhost:3000/api/v1/profiles/${profileId}`, {
          method: 'PUT',
          body: JSON.stringify({password: newPassword}),
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
          setNewPassword('')
          setConfirmPassword('')
          setError(null)
          localStorage.setItem('username', json.username);
        }
    };


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:py-40 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Neues Passwort einrichten
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmitPassword}>
            
     
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
                className="w-full xl:w-96 block rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />



              <label htmlFor="password-user-check" className="mt-5 block text-sm font-medium leading-6 text-gray-900">
                    Passwort bestätigen
              </label>

              <div className="flex items-center justify-center">
                <div className="w-full">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password-user-check"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        id="password-user-check"
                        autoComplete="password-user-check"
                        className="xl:col-span-2 w-full block rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      />

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
              

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-400 hover:bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Passwort ändern
              </button>
            </div>
            {error && <div className="error">{error}</div>}
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Passwort geändert?{' '}
            <a href="/anmelden" className="font-semibold leading-6 text-green-600 hover:text-green-500">
              Zurück zur Anmeldung
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

ForgetPassword.propTypes = {
  profileId: PropTypes.string.isRequired
};