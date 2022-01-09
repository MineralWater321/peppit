import React from "react";
import { Link } from "react-router-dom";
import { user } from "../Auth";
export default function RoutePick() {
  const auth = "Peppit";
  return (
    <div className=" dropdown md:dropdown-start dropdown-hover dropdown-end lg:block ">
      <div className="avatar placeholder px-4 h-6 ">
        <div className="bg-neutral-focus hover:bg-red-300 hover:cursor-pointer  text-neutral-content rounded-full w-10 h-10">
          <img src={`https://avatars.dicebear.com/api/avataaars/${auth}.svg`} />
        </div>
      </div>
      {/* <div tabindex="0" class="m-1 btn">This</div>  */}
      <ul
        tabIndex="0"
        className="p-2 shadow menu dropdown-content bg-base-200  rounded-box w-52 text-base-content"
        data-choose-theme
      >
        <li>
          <Link to="/" className="hover:bg-red-300  ">
            🏠 Home
          </Link>
        </li>
        <li>
          <Link to={`/u/${user}`} className="hover:bg-red-300  ">
            💆 Profile
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:bg-red-300">
            🌂 About
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:bg-red-300">
            🐕‍🦺 Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:bg-red-300">
            📲 Contact
          </Link>
        </li>
        <li className="flex md:hidden">
          <Link to="/login" className="hover:bg-red-300 ">
            🏳️ Login/Register
          </Link>
        </li>

        <li>
          <Link to="404" className="hover:bg-red-300">
            👋 Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}
