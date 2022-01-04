import { Link } from "react-router-dom";
import RoutePick from "./RoutePick";
import logo from "../assets/NEW.png";

export default function Navbar() {
  return (
    <nav className="navbar mb-2 shadow-lg bg-neutral justify-between text-neutral-content">
      <div className=" flex-1 px-2 mx-2 lg:flex">
        <Link to="/" className="flex items-center">
          <div class=" flex-none">
            <div class="avatar">
              <div class="rounded-full w-10 h-10 m-1">
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
      <div className="flex-1  hidden sm:flex lg:flex-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input  input-ghost bg-base-300 focus:bg-base-100"
          />
        </div>
      </div>
      <div className="flex-wrap hidden md:flex mr-1">
        <Link to="/login">
          <button class="btn btn-outline btn-neutral">Login</button>
        </Link>
      </div>
      <div className="flex-wrap  hidden md:flex mr-1">
        <button className="btn btn-outline btn-neutral">Register</button>
      </div>
      <div className="flex-none">
        <RoutePick />
      </div>
    </nav>
  );
}
