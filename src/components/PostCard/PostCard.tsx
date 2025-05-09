import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { PostData } from "@/types/commonTypes";
import { useNavigate } from "react-router-dom";
import BaseModal from "../Modal/Modal";

interface PostCardProps {
    url: string;
    isOwned?: boolean;
    data: PostData;
    handleDeletePost?: (postId: string) => void;
    handleEditPost?: (postId: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({
    url,
    isOwned = false,
    data,
    ...props
}) => {
    const navigate = useNavigate();
    const [isOpenDeletedModal, setIsOpenDeletedModal] = React.useState(false);

    const handleClick = (postId: string) => {
        navigate(`/post/detail/${postId}`);
    };

    return (
        <>
            <BaseModal
                isOpen={isOpenDeletedModal}
                onClose={() => {
                    setIsOpenDeletedModal(false);
                    console.log("close");
                }}
            >
                <div className="place-content-center text-center place-items-center">
                    <p className="font-mono text-lg w-40 mb-3">
                        Are you sure you want to delete this post?
                    </p>
                    <Button
                        className="bg-red-600 hover:bg-red-900 cursor-pointer mr-5"
                        onClick={() => {
                            props.handleDeletePost?.(data.id);
                            setIsOpenDeletedModal(false);
                        }}
                    >
                        Delete
                    </Button>
                    <Button
                        onClick={() => setIsOpenDeletedModal(false)}
                        className="bg-cyan-600 hover:bg-cyan-900 cursor-pointer"
                    >
                        Cancel
                    </Button>
                </div>
            </BaseModal>
            <Card
                className="post-card flex flex-col justify-between
            p-3 hover:shadow-md hover:shadow-theme-text-secondary rounded-sm border-[1px] border-theme-border
            bg-theme-primary
            transition-transform duration-100 hover:scale-103
            h-auto  "
            >
                <div onClick={() => handleClick(data.id)}>
                    <img
                        src={url}
                        alt=""
                        className="post-card-img w-full sm:h-44 xs:h-36 object-fit
                    rounded-sm"
                    />
                    <CardHeader className="p-0 cursor-pointer">
                        <CardTitle className="h-15 text-theme-text-primary font-playfair text-xl font-semibold pt-2 leading-tight line-clamp-2">
                            {data.title}
                        </CardTitle>
                        <CardDescription className="text-theme-text-secondary text-sm font-mono">
                            {new Date(data.date).toLocaleDateString("en-GB")}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 cursor-pointer h-25">
                        <p className="leading-tight text-theme-text-primary line-clamp-5">
                            {data.content}.
                        </p>
                    </CardContent>
                </div>
                <CardFooter className="mt-3 p-0">
                    {isOwned ? (
                        <div className="flex flex-row justify-end w-full">
                            <Button
                                className="h-8 mr-3 cursor-pointer bg-red-600 hover:bg-gray-700"
                                onClick={() => setIsOpenDeletedModal(true)}
                            >
                                Delete
                            </Button>
                            <Button
                                className="h-8 cursor-pointer bg-green-600 hover:bg-gray-700"
                                onClick={() => {
                                    navigate("/edit-post/" + data.id);
                                }}
                            >
                                Edit
                            </Button>
                        </div>
                    ) : (
                        <div className="flex flex-row justify-between w-full">
                            <div className="flex flex-row gap-2 place-content-center place-items-center">
                                <Avatar className="author-avatar h-8 w-8 border-theme-border">
                                    <AvatarImage src="https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg" />
                                    <AvatarFallback className="text-theme-text-primary">
                                        CN
                                    </AvatarFallback>
                                </Avatar>
                                <p className="author-name text-theme-text-secondary font-roboto text-sm">
                                    {data.author}
                                </p>
                            </div>
                            <button
                                className="btn cursor-pointer btn-sm btn-primary font-roboto  text-theme-text-primary
                     hover:underline hover:text-blue-700"
                                onClick={() => handleClick(data.id)}
                            >
                                Read More
                            </button>
                        </div>
                    )}
                </CardFooter>
            </Card>
        </>
    );
};

export default PostCard;
