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

interface PostCardProps {
    url: string;
}

const PostCard: React.FC<PostCardProps> = ({ url }) => {
    return (
        <Card
            className="post-card flex flex-col justify-between
            p-3 hover:shadow-md hover:shadow-theme-text-secondary rounded-sm border-[1px] border-theme-border
            bg-theme-primary
            transition-transform duration-100 hover:scale-103
            max-h-[450px] "
        >
            <div>
                <img
                    src={url}
                    alt=""
                    className="post-card-img w-full xl:h-44 lg:h-36 object-fill
                    rounded-sm"
                />
                <CardHeader className="p-0 cursor-pointer">
                    <CardTitle className="text-theme-text-primary font-playfair text-xl font-semibold pt-2 leading-tight">
                        Micro-Interactions: Small Details, Big Impact in UX
                    </CardTitle>
                    <CardDescription className="text-theme-text-secondary text-sm font-mono">
                        22/04/2025
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-0 cursor-pointer">
                    <p className="leading-tight text-theme-text-primary line-clamp-5">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Cat provident minus rem ipsum dolor sit, amet
                        consectetur adipisicing elit. Cat provident minus
                        cupidit cupiditate perspiciatis.
                    </p>
                </CardContent>
            </div>
            <CardFooter className="mt-3 p-0">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row gap-2 place-content-center place-items-center">
                        <Avatar className="author-avatar h-8 w-8 border-theme-border">
                            <AvatarImage src="https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg" />
                            <AvatarFallback className="text-theme-text-primary">
                                CN
                            </AvatarFallback>
                        </Avatar>
                        <p className="author-name text-theme-text-secondary font-roboto text-sm">
                            Jame Mcligni
                        </p>
                    </div>
                    <button
                        className="btn cursor-pointer btn-sm btn-primary font-roboto  text-theme-text-primary
                     hover:underline hover:text-blue-700"
                    >
                        Read More
                    </button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default PostCard;
