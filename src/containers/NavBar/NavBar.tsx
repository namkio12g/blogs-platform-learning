import React from "react";
import BlogLogo from "../../assets/blog.png";
import { Link } from "react-router";
import { SquarePen } from "lucide-react";
import "./NavBar.scss";

const NavBar: React.FC = () => {
    return (
        <nav
            className="navbar flex md:flex-row xs:flex-col py-5 w-full bg-theme-secondary 
        rounded-sm shadow-md shadow-theme-text-secondary place-items-center place-content-center px-5
        sticky top-0 z-10  "
        >
            <div className="inline-block">
                <img
                    src={BlogLogo}
                    alt=""
                    className="h-12 w-12 inline-block mr-3"
                />
                <Link
                    to="/posts"
                    className="navbar-title inline-block mr-10 font-comic text-2xl font-bold text-theme-text-primary"
                >
                    Blog Platform
                </Link>
            </div>
            <ul className="navbar-links inline-block">
                <li className="link inline-block mr-7 text-xl text-theme-text-primary">
                    <Link to="/posts">Posts</Link>
                </li>

                <li className="link inline-block mr-7 text-xl text-theme-text-primary">
                    <Link to="/add-new-post" className="">
                        <SquarePen className="mr-2 mb-1 inline-block" />
                        Write
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
