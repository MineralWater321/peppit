import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav classNameName="bg-black shadow-lg">
            <div classNameName="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">                        
                        <div className="hidden md:flex items-center space-x-1">
                            <Link
                                to="/home"
                                className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
                                >peppit
                            </Link>
                            <Link
                                to="/services"
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                                >Services
                            </Link>
                            <Link
                                to="/about"
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                                >About
                            </Link>
                            <Link
                                to="/contact"
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                                >Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}