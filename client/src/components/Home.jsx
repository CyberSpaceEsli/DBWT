import Filter from './Filter.jsx'
import Map from './Map.jsx'
import { useState, useEffect } from "react"

function Home() {
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

  return (
    <div className="my-20 md:my-32">
     <Filter setShowSchoolDetails={setShowSchoolDetails} setShowKindergardenDetails={setShowKindergardenDetails} setShowSocialChildProjectDetails={setShowSocialChildProjectDetails} setShowSocialTeenagerProjectDetails={setShowSocialTeenagerProjectDetails} setShowAll={setShowAll}/>
     <Map showSchoolDetails={showSchoolDetails} showKindergardenDetails={showKindergardenDetails} showSocialChildProjectDetails={showSocialChildProjectDetails} showSocialTeenagerProjectDetails={showSocialTeenagerProjectDetails}/>
     </div>
  )
}

export default Home