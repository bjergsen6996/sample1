const NextPage = () => {
    return (
      <div
        className="w-[584px] h-[330px] bg-no-repeat bg-cover flex items-center justify-center border-2 border-gray-300 relative"
        style={{
          backgroundImage: `url('/background.jpg')`,
        }}
      >
        {/* Trees positioned on the sides */}
        <img
          src="/3436801_20252.jpg"
          alt="Left Tree"
          className="absolute bottom-0 left-0 w-[120px] h-auto"
        />
  
        {/* Apple and Text */}
        <div className="flex flex-col items-center">
          <img
            src="/image-removebg-preview (19).png"
            alt="Apple"
            className="w-[100px] h-auto"
          />
          <h1 className="text-black font-extrabold text-2xl mt-2">
            APPLE
          </h1>
        </div>
      </div>
    );
  };
  
  export default NextPage;
  