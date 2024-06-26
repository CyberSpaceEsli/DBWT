import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Profile from './Profile.jsx'
import PropTypes from 'prop-types';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Dokumentation', href: 'http://localhost:3000/apidoku', newTab: true },
  { name: 'Impressum', href: '/impressum' }
]

export default function Header({ isAuthenticated, setAuthStatus }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    setAuthStatus(false);
  };

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-60">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1 items-center">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="/point-of-interest.png"
                alt="POI"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} target={item.newTab ? '_blank' : '_self'}  className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
             {isAuthenticated ? ( 
              <Profile setAuthStatus={setAuthStatus}/>
             ) : (
            <a href="/anmelden" className="text-sm font-semibold leading-6 text-gray-900">
              Anmelden <span aria-hidden="true">&rarr;</span>
            </a>
             )}
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">DBWT</span>
                <img
                  className="h-8 w-auto"
                  src="/point-of-interest.png"
                  alt="POI"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                  {isAuthenticated ? (
                    <div className="border-t broder-gray-600">
                      <a href="/profil" className="-mx-3 block rounded-lg px-3 pt-4 pb-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Persönliche Daten</a>
                      <a href="/" onClick={handleLogout} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Abmelden</a>
                    </div>
                  ) : (
                    <div className="border-t broder-gray-600">
                      <a href="/anmelden" className="-mx-3 block rounded-lg px-3 py-4 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Anmelden <span aria-hidden="true">&rarr;</span></a>
                    </div>
                   )}                    
                </div>
                </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )

}

Header.propTypes = {
  setAuthStatus: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};
