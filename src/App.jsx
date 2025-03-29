import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const [countdown, setCountdown] = useState(null);
  const [startCountdown, setStartCountdown] = useState(false);
  const navigate = useNavigate();

  // Handle countdown logic
  useEffect(() => {
    let timer;
    if (startCountdown && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      navigate('/next'); // Navigate when countdown reaches 0
    }

    return () => clearTimeout(timer);
  }, [countdown, startCountdown, navigate]);

  // Start countdown when the button is clicked
  const handleClick = () => {
    setCountdown(5); // Set initial countdown value
    setStartCountdown(true); // Start countdown
  };

  return (
    <div className="background-container">
      {/* Countdown Number */}
      {countdown !== null && countdown > 0 && (
        <div className="countdown-number">{countdown}</div>
      )}

      {/* Character Image */}
      <img
        src="/freepik__background__27761-removebg-preview.png"
        alt="Character"
        className="character"
      />

      {/* Button to Start Countdown */}
      <button onClick={handleClick}>Let’s Read!</button>
    </div>
  );
}

export default App;
