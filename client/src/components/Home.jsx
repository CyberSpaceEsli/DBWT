import Filter from './Filter.jsx'
import Map from './Map.jsx'
import { useState, useEffect } from "react"
import ProfileDataDisplay from './ProfileDataDisplay.jsx';
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

  var username;

    if(isAuthenticated) {
      username = localStorage.username;
    }

  return (
    <div className="my-20 md:my-32">
      <Filter setShowSchoolDetails={setShowSchoolDetails} setShowKindergardenDetails={setShowKindergardenDetails} setShowSocialChildProjectDetails={setShowSocialChildProjectDetails} setShowSocialTeenagerProjectDetails={setShowSocialTeenagerProjectDetails} setShowAll={setShowAll}/>
      <Map showSchoolDetails={showSchoolDetails} showKindergardenDetails={showKindergardenDetails} showSocialChildProjectDetails={showSocialChildProjectDetails} showSocialTeenagerProjectDetails={showSocialTeenagerProjectDetails} profileId={profileId}/>
      
       
        <div className="my-5 lg:container md:mx-auto p-6 lg:p-0">
        <ProfileDataDisplay username={username} profileId={profileId} profile={profile} isAuthenticated={isAuthenticated} />
      </div>
      

     </div>
  )
}

export default Home

Home.propTypes = {
  profileId: PropTypes.string, 
  profile: PropTypes.any, 
  isAuthenticated: PropTypes.bool
};