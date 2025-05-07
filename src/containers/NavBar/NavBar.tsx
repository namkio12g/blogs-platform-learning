import React from "react";
import BlogLogo from "../../assets/blog.png";
import { Link } from "react-router";
import { SquarePen } from "lucide-react";
import "./NavBar.scss";

const NavBar: React.FC = () => {
    return (
        <nav className="navbar h-20 w-full bg-theme-secondary rounded-sm shadow-lg place-content-center px-5">
            <div className="inline-block">
                <img
                    src={BlogLogo}
                    alt=""
                    className="h-12 w-12 inline-block mr-3"
                />
                <Link
                    to="/"
                    className="navbar-title inline-block mr-10 font-comic text-2xl font-bold text-theme-text-primary"
                >
                    Blog Platform
                </Link>
            </div>
            <ul className="navbar-links inline-block">
                <li className="link  inline-block mr-7 text-xl text-theme-text-primary">
                    <Link to="/">Home</Link>
                </li>
                <li className="link inline-block mr-7 text-xl text-theme-text-primary">
                    <Link to="/post/detail/123213">Posts</Link>
                </li>
                <li className="inline-block">
                    <input
                        type="text"
                        className={`search-box inline-block border-theme-text-primary border-[1px] rounded-full w-96 h-10 px-3 placeholder:text-theme-text-primary text-theme-text-primary 
                        mr-2
                        `}
                        placeholder={` Search for a post...`}
                    />
                </li>
                <li className="link inline-block mr-7 text-xl text-theme-text-primary">
                    <Link to="/add-new-post" className="flex flex-row">
                        <SquarePen className="mr-2" />
                        Write
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
