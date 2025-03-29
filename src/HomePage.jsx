import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ReadingPage = () => {
  const myBackground = '/cute-cartoon-background-children.jpg';
  const [countdown, setCountdown] = useState(3);
  const navigate = useNavigate();

  // Start countdown automatically when the component mounts
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      navigate('/tester'); // Redirect when countdown ends
    }
  }, [countdown, navigate]);

  // Function to reset and restart countdown
  const handleClick = () => {
    setCountdown(3); // Reset countdown
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 min-h-screen">
      {/* Overview Title */}
      <h2 className="text-blue-500 font-bold text-sm self-start mb-4">
        Welcome to the Reading Page!
      </h2>

      {/* Background Container */}
      <div className="relative w-[700px] h-[400px] rounded-lg overflow-hidden shadow-lg border border-blue-300">
        {/* Background Image */}
        <div
          className="w-full h-full bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(${myBackground})`,
            backgroundSize: 'cover',
          }}
        >
          {/* Character Image Positioned in the Center */}
          <div className="absolute bottom-[70px] left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
            <img
              src="/freepik__background__27761-removebg-preview.png"
              alt="Character"
              className="w-[200px] h-auto object-contain"
            />

            {/* Button Positioned Below the Character */}
            <button
              onClick={handleClick}
              className="bg-green-500 text-white text-lg font-bold py-2 px-8 rounded-full shadow-lg hover:bg-green-600 transition mt-2"
            >
              Let’s Read!
            </button>
          </div>

          {/* Countdown Overlay (Centered Inside the Background) */}
          {countdown !== null && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="
                  text-[160px]
                  font-extrabold
                  bg-gradient-to-r from-blue-400 to-green-400
                  text-transparent
                  bg-clip-text
                  drop-shadow-2xl
                  animate-bounce
                  transform scale-110 transition-all ease-in-out
                "
              >
                {countdown}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadingPage;
