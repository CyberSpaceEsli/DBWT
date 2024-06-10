import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx'
import LogIn from './components/LogIn.jsx';
import SignUp from './components/SignUp.jsx';
import Impressum from './components/Impressum.jsx'
import NoPage from "./components/NoPage.jsx";
import ProfileDataForm from "./components/ProfileDataForm.jsx";
import PropTypes from 'prop-types';
import './App.css'
import { useState, useEffect } from 'react';

function Router({ isAuthenticated, setAuthStatus }) {
  const [profiles, setProfile] = useState('')

  useEffect(() => {
      const fetchProfiles = async () => {
      const res = await fetch('http://localhost:3000/api/v1/profile/all')
      const json = await res.json()

      if(res.ok) {
        setProfile(json)
        console.log("profile:", json)
      }
    }

    fetchProfiles()
   }, [])


  return (
     <BrowserRouter>
        <Routes>

            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Home */}
            {profiles && profiles.map((profile) => (
            <Route index key={profile._id} element={<Home isAuthenticated={isAuthenticated} profileId={profile._id} profile={profile} />} />
              ))}

            {/* Impressum */}
            <Route path="impressum" element={<Impressum />} />

             {/* LogIn */}
            <Route path="anmelden" element={<LogIn setAuthStatus={setAuthStatus}/>} />

             {/* SignUp */}
            <Route path="registrieren" element={<SignUp />} />

             {/* Profile Data */}
             {profiles && profiles.map((profile) => (
               <Route key={profile._id} path="profil" element={<ProfileDataForm isAuthenticated={isAuthenticated} profileId={profile._id} />} />
             ))}
            
            
            {/* 404 Page */}
            <Route path="*" element={<NoPage />} />


        </Routes>
      </BrowserRouter>
  )
}

export default Router

Router.propTypes = {
  setAuthStatus: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};