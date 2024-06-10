import Filter from './Filter.jsx'
import Map from './Map.jsx'
import { useState, useEffect } from "react"
//import ProfileDataDisplay from './ProfileDataDisplay.jsx';
import PropTypes from 'prop-types';

function Home({ profileId, profile, isAuthenticated }) {
  const [showSchoolDetails, setShowSchoolDetails] = useState(false);
  const [showKindergardenDetails, setShowKindergardenDetails] = useState(false);
  const [showSocialChildProjectDetails, setShowSocialChildProjectDetails] = useState(false);
  const [showSocialTeenagerProjectDetails, setShowSocialTeenagerProjectDetails] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setShowSchoolDetails(true);
      setShowKindergardenDetails(true);
      setShowSocialChildProjectDetails(true);
      setShowSocialTeenagerProjectDetails(true);
    } else {
      setShowSchoolDetails(false);
      setShowKindergardenDetails(false);
      setShowSocialChildProjectDetails(false);
      setShowSocialTeenagerProjectDetails(false);
    }
  }, [showAll]);

  //var username;
  //var street;
  //var city;
  //var plz;

    if(isAuthenticated) {
      //username = localStorage.username;
      //street = localStorage.street;
      //city = localStorage.city;
      //plz = localStorage.zip;
    }

  return (
    <div className="my-20 md:my-32">
      <Filter setShowSchoolDetails={setShowSchoolDetails} setShowKindergardenDetails={setShowKindergardenDetails} setShowSocialChildProjectDetails={setShowSocialChildProjectDetails} setShowSocialTeenagerProjectDetails={setShowSocialTeenagerProjectDetails} setShowAll={setShowAll}/>
      <Map showSchoolDetails={showSchoolDetails} showKindergardenDetails={showKindergardenDetails} showSocialChildProjectDetails={showSocialChildProjectDetails} showSocialTeenagerProjectDetails={showSocialTeenagerProjectDetails} profileId={profileId} profile={profile}/>
      
      {/* 
        <div className="my-5 lg:container md:mx-auto p-6 lg:p-0">
        <ProfileDataDisplay username={username} isAuthenticated={isAuthenticated} street={street} city={city} plz={plz} />
      </div>
      */}

     </div>
  )
}

export default Home

Home.propTypes = {
  profile: PropTypes.any,
  profileId: PropTypes.string, 
  isAuthenticated: PropTypes.bool
};