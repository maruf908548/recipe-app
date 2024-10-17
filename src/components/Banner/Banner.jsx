import "./Banner.css"; // Importing custom CSS for any extra styles

const Banner = () => {
  return (
    <div className="relative h-[70vh] flex flex-col  justify-center items-center text-white ml-4 mr-4">
      <img
        src="/src/assets/recipe_making.png"
        alt="Cooking Class"
        className="absolute inset-0 w-full h-full rounded-2xl  object-cover   z-0"
      />

      {/* Overlay to make text visible over the image */}
      <div className="absolute inset-0 rounded-2xl bg-black bg-opacity-50 z-5"></div>

      {/* Banner content */}
      <div className="relative text-center max-w-3xl">
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
            className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-700 text-white"
          >
            Explore Now
          </a>
          <a
            href="/feedback"
            className="px-6 py-3 rounded-full border-2 border-white hover:bg-white hover:text-gray-800 text-white"
          >
            Our Feedback
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
