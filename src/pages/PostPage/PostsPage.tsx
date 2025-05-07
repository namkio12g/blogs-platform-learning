import React, { useEffect, useMemo, useState } from "react";
import apiClient from "../../api/TaskAPI";
import PostCard from "@/components/PostCard/PostCard";
import MainPostCard from "@/components/PostCard/MainPostCard";
import { Binoculars, Coffee } from "lucide-react";

import "./PostPage.scss";

const PostsPage: React.FC = () => {
    return (
        <div className="all-tasks-container flex flex-row bg-theme-third shadow-md rounded-lg p-4">
            <div
                className="left-container w-1/5 bg-theme-third 
             border-r-2 border-theme-border border-opacity-20"
            >
                <div className="mt-62 w-full px-4">
                    <ul className=" document-list text-theme-text-primary text-lg font-roboto ">
                        <li className="item flex flex-row">
                            <Coffee className="mr-2" />
                            Hot blogs
                        </li>
                        <li className="item flex flex-row">
                            <Binoculars className="mr-2" />
                            Discover
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right-container w-4/5 px-3">
                <div
                    className="container-title text-5xl text-theme-text-primary font-bold font-comic
                leading-normal mb-5 w-fit"
                >
                    <p>The site you</p>
                    <div className="flex">
                        <p className="inline-block after:content-['-'] after:text-blue-500 after:text-6 xl ">
                            want
                        </p>
                        Without
                    </div>
                    <p> the develop time.</p>
                </div>
                <div className="main-card grid grid-cols-1 mb-8">
                    <MainPostCard />
                </div>
                <div className="posts-list grid grid-cols-3 gap-4">
                    <PostCard url="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png" />
                    <PostCard url="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" />
                    <PostCard url="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png" />
                    <PostCard url="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" />
                    <PostCard url="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png" />
                </div>
            </div>
        </div>
    );
};

export default PostsPage;
