import Filter from './Filter.jsx'
import Map from './Map.jsx'
import { useState} from "react"

function Home() {
  const [showSchoolDetails, setShowSchoolDetails] = useState(false);

  return (
    <div className="my-20 md:my-32">
     <Filter setShowSchoolDetails={setShowSchoolDetails}/>
     <Map showSchoolDetails={showSchoolDetails}/>
     </div>
  )
}

export default Home