import { Link } from "react-router-dom";
import RoutePick from "./RoutePick";

export default function Navbar() {
    return (
        <nav className="navbar mb-2 shadow-lg bg-neutral w-screen text-neutral-content">
            <div className="flex-1 px-2 mx-2 lg:flex">
                <span className="text-lg font-bold">
                    Peppit
                </span>
            </div>
            <div className="flex-1  hidden md:flex lg:flex-center">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-ghost" />
                </div>
            </div>
            <div className="flex-wrap hidden md:flex mr-1">
                <Link to="/login" >
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
    )
}