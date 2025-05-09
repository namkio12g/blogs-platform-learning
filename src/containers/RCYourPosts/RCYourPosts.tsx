import apiClient from "@/api/TaskAPI";
import PostCard from "@/components/PostCard/PostCard";
import { PostData } from "@/types/commonTypes";
import React, { useEffect, useMemo } from "react";
import { toast } from "sonner";

type ContainerProps = {
    tagsSearch: string[];
    keySearch: string;
};
export const Container: React.FC<ContainerProps> = ({ ...props }) => {
    const [data, setData] = React.useState<PostData[]>([]);

    const images = [
        "https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png",
        "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
        "https://t4.ftcdn.net/jpg/10/93/45/23/360_F_1093452370_iSpkxn4xqCPjxnMJyRuguYhpqaQ8P0Yk.jpg",
        "https://blog.adobe.com/fr/topics/media_1ca79b205381242c5f8beaaee2f0e1cfb2aa8f324.png?width=750&format=png&optimize=medium",
        "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    ];

    const handleDeletePost = async (postId: string) => {
        console.log("delete post", postId);
        await apiClient
            .patch(`/posts/${postId}`, { isDelete: true })
            .then(() => {
                toast.success("Post deleted successfully");
                setData((prevData) =>
                    prevData.filter((post) => post.id !== postId)
                );
            })
            .catch(() => {
                toast.error("Error while deleting post");
            });
    };

    useEffect(() => {
        const fetchPosts = async () => {
            await apiClient
                .get(
                    `/posts?isDelete=false&title_like=${props.keySearch}` +
                        props.tagsSearch
                            .map((tag) => `&tags_like=${tag}`)
                            .join("")
                )
                .then((res) => {
                    setData(res.data);
                })
                .catch(() => {
                    console.log("fetchPosts error");
                });
        };
        fetchPosts();
    }, [props.tagsSearch, props.keySearch]);

    const posts = useMemo(() => {
        if (!data) return [];
        return data.map((post) => {
            const image = images[Math.floor(Math.random() * images.length)];

            return { ...post, image };
        });
    }, [data]);

    return (
        <>
            <div
                className="container-title text-5xl text-theme-text-primary font-bold font-comic
                leading-normal mb-5 w-fit"
            >
                <p>Your Posts here</p>
            </div>

            <div className="your-posts grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
                {posts.length > 0 &&
                    posts.map((post) => {
                        return (
                            <PostCard
                                key={post.id}
                                url={post.image}
                                isOwned={true}
                                data={post}
                                handleDeletePost={handleDeletePost}
                            />
                        );
                    })}
            </div>
        </>
    );
};
