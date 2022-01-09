import { Link } from "react-router-dom";
import RoutePick from "./RoutePick";
import logo from "../assets/NEW.png";

export default function Navbar() {
  return (
    <nav className="navbar shadow-lg bg-neutral text-neutral-content">
      <div className="navbar-start">
        <Link to="/" className="flex items-center">
          <div className=" flex-none">
            <div className="avatar">
              <div className="rounded-full w-10 h-10 m-1">
                <img
                  src={logo}
                  alt="Inc Logo"
                  className="  w-10 h-auto bg-base-100"
                />
              </div>
            </div>
          </div>
          <span className="text-3xl font-bold">peppit</span>
        </Link>
      </div>
      <div className="navbar-center hidden md:inline">
        <div className="form-control md:w-128">
          <input
            type="text"
            placeholder="Search"
            className="input  input-ghost bg-base-300 focus:bg-base-100"
          />
        </div>
      </div>
      <div className="navbar-end">
        <div className="flex-wrap hidden md:flex mr-1">
          <Link to="/login">
            <button className="btn btn-outline btn-neutral">Login</button>
          </Link>
        </div>
        <div className="flex-wrap  hidden md:flex mr-1">
          <button className="btn btn-outline btn-neutral">Register</button>
        </div>
        <div className="flex-none">
          <RoutePick />
        </div>
      </div>
    </nav>
  );
}
