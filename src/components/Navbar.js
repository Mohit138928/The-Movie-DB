import { SiThemoviedatabase } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex border space-x-8 items-center pl-3 py-4">
        <SiThemoviedatabase className="text-4xl" />
        <Link to="/" className="text-blue-400 text-2xl font-bold">
          Movies
        </Link>
        <Link to="/watchlist" className="text-blue-400 text-2xl font-bold">
          WatchList
        </Link>
      </div>
    </>
  );
};

export default Navbar;
