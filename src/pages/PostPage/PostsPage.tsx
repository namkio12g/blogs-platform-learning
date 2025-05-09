import React from "react";
import { Link, useSearchParams } from "react-router";
import { Container as PostContainer } from "@/containers/RCPosts/RCPosts";
import { Container as YourPostsContainer } from "@/containers/RCYourPosts/RCYourPosts";
import { Binoculars, Coffee } from "lucide-react";
import "./PostPage.scss";

const PostsPage: React.FC = () => {
    const [params] = useSearchParams();
    const feature = params.get("feature");

    return (
        <div className="all-tasks-container flex flex-row bg-theme-third shadow-md rounded-lg p-4 place-content-center">
            <div
                className="left-container w-1/5 bg-theme-third 
             border-r-2 border-theme-border border-opacity-20  md:block xs:hidden"
            >
                <div className="mt-60 w-full px-4">
                    <ul className=" document-list text-theme-text-primary text-lg font-roboto ">
                        <li className="inline-block">
                            <input
                                type="text"
                                className={`search-box inline-block border-theme-text-secondary border-[1px] rounded-full 
                                        w-full h-10 px-3 placeholder:text-theme-text-primary text-theme-text-primary 
                                        text-sm mb-4  focus:outline-lime-700 
                                        `}
                                placeholder={` Search for a post...`}
                            />
                        </li>
                        <li>
                            <Link
                                to="/posts?feature=all"
                                className="item flex flex-row"
                            >
                                <Binoculars className="mr-2" />
                                Discover
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/posts?feature=yourPosts"
                                className="item flex flex-row"
                            >
                                <Coffee className="mr-2" />
                                Your blogs
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right-container md:w-4/5 xs:w-full px-3">
                {feature === "yourPosts" ? (
                    <YourPostsContainer />
                ) : (
                    <PostContainer />   
                )}
            </div>
        </div>
    );
};

export default PostsPage;
