import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import PropTypes from 'prop-types';

export default function Profile({ setAuthStatus }) {

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    localStorage.removeItem('street');
    localStorage.removeItem('city');
    localStorage.removeItem('plz');
    setAuthStatus(false);

  };

  return (
    <div className="lg:mr-14">
     <Menu>
      <MenuButton>
        <div className="mt-14 lg:mt-0 relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full">
            <svg className="absolute w-8 h-8 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
        </div>
      </MenuButton>
      <MenuItems className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 py-1.5 mt-1.5 px-1.5 text-sm font-semibold" anchor="bottom">
        <MenuItem>
          <a className="block px-4 py-2 dark:hover:text-white data-[focus]:bg-indigo-50 data-[focus]:rounded-lg" href="/profil">
            Persönliche Daten
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block px-4 py-2 data-[focus]:bg-indigo-50 data-[focus]:rounded-lg" href="/" onClick={handleLogout}>
            Abmelden
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
    </div>
  )
}

Profile.propTypes = {
  setAuthStatus: PropTypes.func.isRequired
}