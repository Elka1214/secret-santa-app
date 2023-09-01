import React, { useState } from "react";
import "./LandingPage.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";
import Register from "./Register";

const LandingPage = () => {
  const [showRegister, setShowRegister] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  return (
    <div className="landing-page">
      <h1>Welcome to the Secret Santa Event!</h1>
      <p>Join the fun and excitement of our Secret Santa gift exchange.</p>
      <div className="cta-buttons">
        <button onClick={handleRegisterClick} className="cta-button">
          Register Now
        </button>
        <Link to="/signin" className="cta-button">
          Sign In
        </Link>
      </div>
      {showRegister && <Register />}
    </div>
  );
};

export default LandingPage;
