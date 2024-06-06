import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx'
import LogIn from './components/LogIn.jsx';
import SignUp from './components/SignUp.jsx';
import Impressum from './components/Impressum.jsx'
import NoPage from "./components/NoPage.jsx";
import ProfileDataForm from "./components/ProfileDataForm.jsx";
import PropTypes from 'prop-types';
import './App.css'

function Router({ isAuthenticated, setAuthStatus }) {

  return (
     <BrowserRouter>
        <Routes>

            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Home */}
            <Route index element={<Home isAuthenticated={isAuthenticated}/>} />

            {/* Impressum */}
            <Route path="impressum" element={<Impressum />} />

             {/* LogIn */}
             {console.log("Auth", isAuthenticated)}
            <Route path="anmelden" element={<LogIn setAuthStatus={setAuthStatus}/>} />

             {/* SignUp */}
            <Route path="registrieren" element={<SignUp />} />

             {/* Profile Data */}
            <Route path="profil" element={<ProfileDataForm isAuthenticated={isAuthenticated} />} />

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