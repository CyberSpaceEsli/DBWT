import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function LogIn({ setAuthStatus }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] =  useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const profile = {username, password}

        const res = await fetch('http://localhost:3000/api/v1/profiles/login', {
          method: 'POST',
          body: JSON.stringify(profile),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const json = await res.json()

        if (!res.ok) {
          setError(json.error)
        }
        if (res.ok) {
          setUsername('')
          setPassword('')
          setError(null)
          console.log("new profile added", json)
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('username', username);
          setAuthStatus(true);
          navigate('/')
        }
    };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:py-40 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Mit dem Profil anmelden
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  autoComplete="username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Passwort
                </label>
                <div className="text-sm">
                  <a href="/passwort" className="font-semibold text-green-600 hover:text-green-500">
                    Passwort vergessen?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Anmelden
              </button>
            </div>
            {error && <div className="error">{error}</div>}
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Noch kein Nutzer?{' '}
            <a href="/registrieren" className="font-semibold leading-6 text-green-600 hover:text-green-500">
              Hier zur Registrierung
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

LogIn.propTypes = {
  setAuthStatus: PropTypes.func.isRequired
};