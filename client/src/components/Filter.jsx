
import PropTypes from 'prop-types';

export default function Filter({ setShowSchoolDetails, setShowKindergardenDetails, setShowSocialChildProjectDetails, setShowSocialTeenagerProjectDetails }) {

    const handleCheckboxChange = (setter) => (event) => {
    setter(event.target.checked);
  };

  return (
<div className="my-5 lg:container md:mx-auto p-6 lg:p-0">

    <h3 className="mb-4 font-semibold text-gray-900">Filteroptionen</h3>
    <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg lg:flex">
        
        <li className="w-full border-b border-gray-200 lg:border-b-0 lg:border-r">
        <div className="flex">       
                <div className="w-full flex items-center ps-3">
                    <input id="checkbox-schools" type="checkbox" value="" onChange={handleCheckboxChange(setShowSchoolDetails)} className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-green-400 focus:ring-1 accent-red-400"/>
                    <label htmlFor="checkbox-schools" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 grid grid-cols-2 items-center lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">Schulen <div className="ml-1 h-2 w-2 rounded-full bg-red-400 justify-self-end lg:justify-self-start mr-3 lg:mr-0"></div></label>
                </div>
            </div>
        </li>
        <li className="w-full border-b border-gray-200 lg:border-b-0 lg:border-r">
            <div className="flex items-center ps-3">
                <input id="checkbox-kindergarden" type="checkbox" value="" onChange={handleCheckboxChange(setShowKindergardenDetails)} className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-green-400 focus:ring-1  accent-blue-400" />
                <label htmlFor="checkbox-kindergarden" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 grid grid-cols-2 items-center lg:gap-12 xl:grid-cols-3 xl:gap-28 2xl:gap-8 2xl:grid-cols-3">Kindertagesstätten <div className="2xl:ml-2 h-2 w-2 rounded-full bg-blue-400 justify-self-end lg:justify-self-start mr-3 lg:mr-0"></div></label>
            </div>
        </li>
            <li className="w-full border-b border-gray-200 lg:border-b-0 lg:border-r">
            <div className="flex items-center ps-3">
                <input id="checkbox-social-work" type="checkbox" value="" onChange={handleCheckboxChange(setShowSocialChildProjectDetails)} className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-green-400 focus:ring-1  accent-pink-400" />
                <label htmlFor="checkbox-social-work" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 grid grid-cols-2 items-center lg:gap-4 xl:grid-cols-3 xl:gap-20 2xl:gap-0 2xl:grid-cols-3">Schulsozialarbeit <div className="2xl:ml-2 h-2 w-2 rounded-full bg-pink-400 justify-self-end lg:justify-self-start mr-3 lg:mr-0"></div></label>
            </div>
        </li>
        <li className="w-full">
            <div className="flex items-center ps-3">
                <input id="checkbox-youth-work-assistance" type="checkbox" value="" onChange={handleCheckboxChange(setShowSocialTeenagerProjectDetails)} className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-green-400 focus:ring-1  accent-purple-400"/>
                <label htmlFor="checkbox-youth-work-assistance" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 grid grid-cols-2 items-center lg:gap-12 xl:grid-cols-3 xl:gap-32 2xl:gap-8 2xl:grid-cols-3">Jugendberufshilfen <div className="2xl:ml-2 h-2 w-2 rounded-full bg-purple-400 justify-self-end lg:justify-self-start mr-3 lg:mr-0"></div></label>
            </div>
        </li>
    </ul>

</div>

  );
}

Filter.propTypes = {
  setShowSchoolDetails: PropTypes.func.isRequired,
  setShowKindergardenDetails: PropTypes.func.isRequired,
  setShowSocialChildProjectDetails: PropTypes.func.isRequired,
  setShowSocialTeenagerProjectDetails: PropTypes.func.isRequired
};