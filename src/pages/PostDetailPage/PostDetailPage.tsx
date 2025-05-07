import React, { useEffect, useMemo, useState } from "react";
import apiClient from "../../api/TaskAPI";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PostDetailPage: React.FC = () => {
    return (
        <div
            className="post-detail-container 
        place-items-center  bg-theme-primary"
        >
            <Card className="post-card-detail  px-5 py-5  w-8/12 min-h-screen text-theme-text-primary  bg-theme-secondary border-theme-border">
                <CardHeader>
                    <CardTitle className="text-center">
                        <span className="container-tittle text-4xl font-playfair font-bold">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit.
                        </span>
                    </CardTitle>
                </CardHeader>
                <div className="w-full text-center">
                    <img
                        src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png"
                        alt=""
                        className="w-full h-auto object-cover mb-3"
                    />
                    <span className="text-md text-theme-text-secondary  ">
                        Sunset on hill image
                    </span>
                </div>
                <CardContent className="p-0 text-lg text-roboto">
                    <div>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eos nemo voluptate dolore deleniti incidunt ut
                        dolorem adipisci ad quod eum similique sapiente, qui
                        iure reiciendis! Placeat enim voluptatem sint. Modi.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eos nemo voluptate dolore deleniti incidunt ut
                        dolorem adipisci ad quod eum similique sapiente, qui
                        iure reiciendis! Placeat enim voluptatem sint. Modi
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eos nemo voluptate dolore deleniti incidunt ut
                        dolorem adipisci ad quod eum similique sapiente, qui
                        iure reiciendis! Placeat enim voluptatem sint. Modi.
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eos nemo voluptate dolore deleniti incidunt ut
                        dolorem adipisci ad quod eum similique sapiente, qui
                        iure reiciendis! Placeat enim voluptatem sint. Modi.
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default PostDetailPage;
