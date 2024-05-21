import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.jsx'
import LogIn from './LogIn.jsx';
import Impressum from './Impressum.jsx'
import NoPage from "./NoPage.jsx";
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

            {/* 404 Page */}
            <Route path="*" element={<NoPage />} />


        </Routes>
      </BrowserRouter>
  )
}

export default Router