import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-4 m-4 ">
        {/* Logo/Website Name */}
        <div className="logo text-2xl font-bold text-darkblue">
          <a href="/">Recipe Calorie</a>
        </div>

        {/* Menu Items */}
        <ul className="menu-items flex space-x-6 font-semibold">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/recipes">Recipes</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/search">Search</a>
          </li>
        </ul>

        {/* Search Bar and User Icon */}
        <div className="search-user flex items-center space-x-4">
          {/* Search Bar */}
          <div className="search-bar relative">
            <button className="search-icon absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
              <CiSearch></CiSearch>
            </button>
            <input
              type="text"
              className="search-input w-200 bg-gray-700 text-white px-4 py-2 rounded-full placeholder-gray-400 focus:outline-none"
              placeholder="Search"
            />
          </div>
          {/* User Icon */}
          <div className="user-icon text-2xl ">
            <button>
              <FaRegUserCircle className="text-darkblue"></FaRegUserCircle>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
