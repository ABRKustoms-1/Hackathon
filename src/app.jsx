import { useState } from "react";
// Import the global styles Person 1 set up
import "./styles/index.css";
import "./styles/animations.css";

// Import the shared UI components
import CustomCursor from "./components/ui/CustomCursor";
import Navbar from "./components/layout/Navbar";

// Import the Page components (These will be built by Persons 3, 4, and 5)
// Note: You will need to create these files (even as empty shells) for the app to run!
import Landing from "./pages/Landing";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";

export default function App() {
  // 'landing' is the default view when the site loads
  const [page, setPage] = useState('landing');

  // Navigation functions passed as "props" to children
  const goGetStarted = () => { 
    setPage('onboarding'); 
    window.scrollTo(0, 0); 
  };
  
  const goLogin = () => { 
    setPage('dashboard'); 
    window.scrollTo(0, 0); 
  };
  
  const goDashboard = () => { 
    setPage('dashboard'); 
    window.scrollTo(0, 0); 
  };

  const goHome = () => {
    setPage('landing');
    window.scrollTo(0, 0);
  };

  return (
    <div className="app-container">
      {/* These UI elements stay visible across all pages */}
      <CustomCursor />
      <Navbar 
        onGetStarted={goGetStarted} 
        onLogin={goLogin} 
        onLogoClick={goHome}
        currentPage={page}
      />

      {/* Conditional Rendering: Show only the active page */}
      <main>
        {page === 'landing' && (
          <Landing onGetStarted={goGetStarted} onLogin={goLogin} />
        )}
        
        {page === 'onboarding' && (
          <Onboarding onComplete={goDashboard} />
        )}
        
        {page === 'dashboard' && (
          <Dashboard onGetStarted={goGetStarted} />
        )}
      </main>
    </div>
  );
}
