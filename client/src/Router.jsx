import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx'
import LogIn from './components/LogIn.jsx';
import SignUp from './components/SignUp.jsx';
import Impressum from './components/Impressum.jsx'
import NoPage from "./components/NoPage.jsx";
import './App.css'

function Router() {

  return (
     <BrowserRouter>
        <Routes>

            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Home */}
            <Route index element={<Home />} />

            {/* Impressum */}
            <Route path="impressum" element={<Impressum />} />

             {/* LogIn */}
            <Route path="anmelden" element={<LogIn />} />

             {/* SignUp */}
            <Route path="registrieren" element={<SignUp />} />

            {/* 404 Page */}
            <Route path="*" element={<NoPage />} />


        </Routes>
      </BrowserRouter>
  )
}

export default Router