import PropTypes from 'prop-types';

export default function ProfileDataDisplay({ username, isAuthenticated }) {

    if(isAuthenticated) {
      username = localStorage.username;
      console.log("username2", username);
    }

  return (
    <div className="mt-10 border-t border-slate-300">
       <div href="#" className="mt-8 block p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-indigo-100">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Ihre gespeicherten Daten zum Profil: {username}.</h5><br />
          
          <p className="font-semibold text-gray-700">Lieblingseinrichtung:</p> 
          <p id="facility" className="mt-2 block text-sm leading-6 text-gray-900">Grundschule Blah</p>

        <div className="mt-4 mb-4 border-t border-slate-300"></div>

        <p className="font-semibold text-gray-700 min-w-full">Heimadresse: </p>

        <div className="">

          <div className="mt-2 flex items-center">
          <p id="street" className="block text-sm leading-6 text-gray-900 pr-4">Senefelderstr 1</p>
            <span className="flex items-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="justify-end text-slate-700 h-4 w-4 hover:text-indigo-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </span>
          </div>

          <p id="city" className="block text-sm leading-6 text-gray-900">Chemnitz</p>
          <p id="plz" className="block text-sm leading-6 text-gray-900">09126</p>
        </div>

        </div>
    </div>
  )
}

ProfileDataDisplay.propTypes = {
    username: PropTypes.string,
    isAuthenticated: PropTypes.bool
};
