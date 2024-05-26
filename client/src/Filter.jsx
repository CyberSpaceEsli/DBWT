import { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

export default function Filter() {
     const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
<div className="my-5 lg:container md:mx-auto p-6 lg:p-0">

<h3 className="mb-4 font-semibold text-gray-900">Filteroptionen</h3>
<ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-indigo-200 rounded-lg lg:flex">
    <li className="w-full border-b border-indigo-200 lg:border-b-0 lg:border-r">
        <div className="flex items-center ps-3">
            <input id="checkbox-all-institutions" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-indigo-400 focus:ring-1" />
            <label htmlFor="checkbox-all-institutions" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Alle</label>
        </div>
    </li>
    <li className="w-full border-b border-indigo-200 lg:border-b-0 lg:border-r">
    <div className="flex">       
            <div className="w-full flex items-center ps-3">
                <input id="checkbox-schools" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-indigo-400 focus:ring-1 accent-red-300"/>
                <label htmlFor="checkbox-schools" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 flex items-center">Schulen <div className="ml-1 h-1.5 w-1.5 rounded-full bg-red-400"></div></label>
            </div>


            <div className="flex flex-col justify-center pr-3">
                <Disclosure>
                <div className="flex justify-end">
                <DisclosureButton onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center text-grey-200 font-medium text-sm text-center">
                    <div className="flex items-end">
                        {!dropdownOpen && (
                        <svg className="w-2.5 h-2.5 hover:text-indigo-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                        )}
                        {dropdownOpen && (
                        <svg className="w-2.5 h-2.5 hover:text-indigo-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path  stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                        )}
                    </div>
                </DisclosureButton>
                </div>
                 <DisclosurePanel>
                        <div className="w-full mt-3 mr-20 p-3 border border-t-1 border-x-0 border-b-0 border-indigo-200 lg:border-0 lg:z-10 lg:w-48 lg:bg-white lg:divide-y lg:divide-gray-100 lg:rounded-lg lg:shadow lg:relative" >
                        <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
                            <li>
                                <div className="flex items-center">
                                    <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-indigo-200 rounded focus:ring-blue-500 focus:ring-1" />
                                    <label htmlFor="checkbox-item-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Alle Schulen</label>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <input id="checkbox-item-2" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-1" />
                                    <label htmlFor="checkbox-item-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Grundschulen</label>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <input id="checkbox-item-3" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-1" />
                                    <label htmlFor="checkbox-item-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gymnasium</label>
                                </div>
                            </li>
                        </ul>
                        </div>
                </DisclosurePanel>
                </Disclosure>  
            </div>
        </div>
    </li>
    <li className="w-full border-b border-indigo-200 lg:border-b-0 lg:border-r">
        <div className="flex items-center ps-3">
            <input id="checkbox-kindergarden" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-400 focus:ring-1  accent-blue-400" />
            <label htmlFor="checkbox-kindergarden" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center">Kindertagesstätten <div className="ml-1 h-1.5 w-1.5 rounded-full bg-blue-400"></div></label>

                <button id="dropdownBgHoverButton" data-dropdown-toggle="dropdownBgHover" className="text-grey-200 hover:text-indigo-800 font-medium text-sm pr-3 text-center inline-flex items-center" type="button">
                    <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
        </div>
    </li>
        <li className="w-full border-b border-indigo-200 lg:border-b-0 lg:border-r">
        <div className="flex items-center ps-3">
            <input id="checkbox-social-work" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-400 focus:ring-1  accent-pink-400" />
            <label htmlFor="checkbox-social-work" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center">Schulsozialarbeit <div className="ml-1 h-1.5 w-1.5 rounded-full bg-pink-400"></div></label>

                <button id="dropdownBgHoverButton" data-dropdown-toggle="dropdownBgHover" className="text-grey-200 hover:text-indigo-800 font-medium text-sm pr-3 text-center inline-flex items-center" type="button">
                    <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
        </div>
    </li>
    <li className="w-full">
        <div className="flex items-center ps-3">
            <input id="checkbox-youth-work-assistance" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-400 focus:ring-1  accent-purple-400"/>
            <label htmlFor="checkbox-youth-work-assistance" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center">Jugendberufshilfen <div className="ml-1 h-1.5 w-1.5 rounded-full bg-purple-400"></div></label>

                <button id="dropdownBgHoverButton" data-dropdown-toggle="dropdownBgHover" className="text-grey-200 hover:text-indigo-800 font-medium text-sm pr-3 text-center inline-flex items-center" type="button">
                    <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
        </div>
    </li>
</ul>

{/*<ul className="lg:flex lg:items-center w-full text-sm font-medium text-gray-900 hidden">
    <li className="w-full mt-1 flex justify-end">
        <div className="w-48"></div>
    </li>
    <li className="w-full mt-1 flex justify-end">
         <div id="dropdownDefaultCheckbox" className="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow">
            <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
                <li>
                    <div className="flex items-center">
                        <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-1" />
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Alle Schulen</label>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <input checked id="checkbox-item-2" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-1" />
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Grundschulen</label>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <input id="checkbox-item-3" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-1" />
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gymnasium</label>
                    </div>
                </li>
            </ul>
         </div>
    </li>
    <li className="w-full mt-1 flex justify-end">
        <div id="dropdownDefaultCheckbox" className="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow">
            <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
                <li>
                    <div className="flex items-center">
                        <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-400 focus:ring-1" />
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <input checked id="checkbox-item-2" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-1" />
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <input id="checkbox-item-3" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-1" />
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                    </div>
                </li>
            </ul>
         </div>
    </li>
    <li className="w-full mt-1 flex justify-end">
        <div id="dropdownDefaultCheckbox" className="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
            <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
                <li>
                    <div className="flex items-center">
                        <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-1" />
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <input checked id="checkbox-item-2" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-1" />
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <input id="checkbox-item-3" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-1" />
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                    </div>
                </li>
            </ul>
         </div>
    </li>
    <li className="w-full mt-1 flex justify-end">
        <div id="dropdownDefaultCheckbox" className="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
            <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
                <li>
                    <div className="flex items-center">
                        <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <input checked id="checkbox-item-2" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <input id="checkbox-item-3" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                    </div>
                </li>
            </ul>
         </div>
    </li>
  </ul> */}

</div>

  );
}