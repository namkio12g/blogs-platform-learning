import apiClient from "@/api/TaskAPI";
import MainPostCard from "@/components/PostCard/MainPostCard";
import PostCard from "@/components/PostCard/PostCard";
import { PostData } from "@/types/commonTypes";
import React, { useEffect, useMemo } from "react";

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
    }, [data, images]);

    return (
        <>
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
            {posts.length > 0 ? (
                <>
                    <div className="main-card grid grid-cols-1 mb-8">
                        <MainPostCard url={posts[0].image} data={posts[0]} />
                    </div>
                    <div className="posts-list grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
                        {posts.length > 0 &&
                            posts.map((post) => {
                                return (
                                    <PostCard
                                        key={post.id}
                                        url={post.image}
                                        data={post}
                                    />
                                );
                            })}
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    );
};
