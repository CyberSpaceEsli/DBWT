import { useState } from 'react'

export default function ProfileData() {
    const [facility, setFacility] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [plz, setPLZ] = useState('')


  return (
    <div className="overflow-hidden bg-white">
        <form className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="flex justify-center lg:pr-8">
        <div className="max-w-2xl">

          <h2 className="text-base font-semibold leading-7 text-indigo-600">Persönliche Informationen</h2>
          <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nehmen Sie weitere Einstellungen an Ihrem Profil vor.</p>

          <div className="my-8">

            <div className="sm:col-span-4 mb-5">
              <p className="block text-sm font-medium leading-6 text-gray-900">
                Sie sind angemeldet als: ...
              </p>
            </div>

            <p className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl mb-5">Ihre Favorite Institution</p>

            <div className="sm:col-span-3 mb-10">
              <label htmlFor="fav-facility" className="block text-sm font-medium leading-6 text-gray-900">
                Lieblingseinrichtung
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fav-facility"
                  id="fav-facility"
                  onChange={ (e) => setFacility(e.target.value) }
                  value={facility}
                  autoComplete="fav-facility"
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {/*<select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>*/}
              </div>
            </div>

            <p className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl mb-5">Ihre Heimadresse</p>

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
                  value={city}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue="Chemnitz"
                />
              </div>
            </div>

            <div className="sm:col-span-2 mb-10">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                PLZ / Postleitzahl
              </label>
              <div className="mt-2">
                <input
                  type="number"
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


      <div className="lg:mt-12 flex items-center lg:justify-end gap-x-6 pb-8 border-b border-slate-300">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Speichern
        </button>
       </div>

       <div href="#" className="mt-8 block p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-indigo-100">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Ihre gespeicherten Daten zum Profil.</h5><br />
          <p className="font-semibold text-gray-700 dark:text-gray-400">Die Lieblingseinrichtung: </p>
          <p className="block text-sm font-medium leading-6 text-gray-900">...</p> <br />

           <p className="font-semibold text-gray-700 dark:text-gray-400">Die Heimadresse: </p>
          <p className="block text-sm font-medium leading-6 text-gray-900">...</p>
        </div>

        </div>
      </div>
    </form>
    </div>
  )
}