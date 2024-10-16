import "./Banner.css"; // Importing custom CSS for any extra styles

const Banner = () => {
  return (
    <div className="banner-container bg-cover bg-center rounded-2xl h-[80vh] flex flex-col justify-center items-center text-white  ml-4 mr-4">
      {/* Overlay to make text visible over the image */}
      <div className="overlay bg-black bg-opacity-50 rounded-2xl absolute inset-0 z-0"></div>

      {/* Banner content */}
      <div className="content z-10 text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database, and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>

        {/* Buttons */}
        <div className="buttons flex justify-center space-x-6">
          <a
            href="/explore"
            className="btn btn-primary px-6 py-3 rounded-full bg-green-500 hover:bg-green-700 text-white"
          >
            Explore Now
          </a>
          <a
            href="/feedback"
            className="btn btn-secondary px-6 py-3 rounded-full bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 text-white"
          >
            Our Feedback
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
