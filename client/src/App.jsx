import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Router from './Router.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  const [authenticated, setIsAuthenticated] = useState(false);

   useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  return (
    <div>
     <Header  isAuthenticated={authenticated} setAuthStatus={setIsAuthenticated}/>
     <Router  isAuthenticated={authenticated} setAuthStatus={setIsAuthenticated}/>
     <Footer />
     </div>
  )
}

export default App
