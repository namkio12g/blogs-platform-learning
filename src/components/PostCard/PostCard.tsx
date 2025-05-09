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

interface PostCardProps {
    url: string;
    isOwned?: boolean;
    data: PostData;
}

const PostCard: React.FC<PostCardProps> = ({ url, isOwned = false, data }) => {
    return (
        <Card
            className="post-card flex flex-col justify-between
            p-3 hover:shadow-md hover:shadow-theme-text-secondary rounded-sm border-[1px] border-theme-border
            bg-theme-primary
            transition-transform duration-100 hover:scale-103
            h-auto  "
        >
            <div>
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
                        <Button className="h-8 mr-3 cursor-pointer bg-red-600 hover:bg-gray-700">
                            Delete
                        </Button>
                        <Button className="h-8 cursor-pointer bg-green-600 hover:bg-gray-700">
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
                        >
                            Read More
                        </button>
                    </div>
                )}
            </CardFooter>
        </Card>
    );
};

export default PostCard;
