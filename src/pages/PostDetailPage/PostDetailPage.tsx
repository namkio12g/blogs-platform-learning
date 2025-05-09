import React, { useEffect, useState } from "react";
import apiClient from "../../api/TaskAPI";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PostData } from "@/types/commonTypes";
import { useParams } from "react-router-dom";

const PostDetailPage: React.FC = () => {
    const params = useParams();
    const [post, setPost] = useState<PostData>();

    useEffect(() => {
        const getPost = async () => {
            const res = await apiClient.get("/posts?id=" + params.id);
            console.log(res.data[0]);
            setPost(res.data[0]);
        };
        getPost();
    }, [params.id]);

    if (post === undefined) return <div>Can't find post...</div>;
    return (
        <div
            className="post-detail-container 
        place-items-center  bg-theme-primary py-10"
        >
            <Card className="post-card-detail  px-5 py-5  w-8/12 min-h-screen text-theme-text-primary  bg-theme-secondary border-theme-border">
                <CardHeader>
                    <CardTitle className="text-center">
                        <span className="container-tittle text-4xl font-playfair font-bold">
                            {post.title}.
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
                        small image of the post
                    </span>
                </div>
                <CardContent className="p-0 text-lg text-roboto">
                    <div>{post.content}</div>
                </CardContent>
            </Card>
        </div>
    );
};

export default PostDetailPage;
