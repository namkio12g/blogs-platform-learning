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
import { PostData } from "@/types/commonTypes";
import { useNavigate } from "react-router-dom";

interface Props {
    url: string;
    data: PostData;
}

const MainPostCard: React.FC<Props> = ({ url, data }) => {
    const navigate = useNavigate();

    const handleClick = (postId: string) => {
        navigate(`/post/detail/${postId}`);
    };
    return (
        <Card
            className="main-post-card flex  sm:flex-row-reverse xs:flex-col
             sm:p-8 xs:p-3 hover:shadow-md hover:shadow-theme-text-secondary rounded-sm border-[1px] border-theme-border
            bg-theme-primary gap-1 
            h-auto"
            onClick={() => handleClick(data.id)}
        >
            <div className="main-post-card-right sm:w-1/2 xs:w-full place-items-center ">
                <img src={url} alt="" />
            </div>
            <div className="main-post-card-left flex flex-col justify-between sm:w-1/2 xs:w-full pr-3 ">
                <div>
                    <CardHeader className="p-0 cursor-pointer">
                        <CardTitle className="text-theme-text-primary font-playfair md:text-3xl sm:text-xl xs:text-2xl   font-semibold pt-2 leading-tight">
                            {data.title}
                        </CardTitle>
                        <CardDescription className="text-theme-text-secondary md:text-lg  sm:text-md  xs:text-lg font-mono">
                            {new Date(data.date).toLocaleDateString("en-GB")}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 cursor-pointer">
                        <p className="leading-tight text-theme-text-primary md:text-xl sm:text-lg  xs:text-xl md:line-clamp-5 sm:line-clamp-3 xs:line-clamp-5">
                            {data.content}.
                        </p>
                    </CardContent>
                </div>
                <CardFooter className="mt-8 p-0">
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-row gap-2 place-content-center place-items-center">
                            <Avatar className="author-avatar h-8 w-8 border-theme-border">
                                <AvatarImage src="https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg" />
                                <AvatarFallback className="text-theme-text-primary">
                                    CN
                                </AvatarFallback>
                            </Avatar>
                            <p className="author-name text-theme-text-secondary font-roboto md:text-md sm:text-sm xs:text-md">
                                {data.author}
                            </p>
                        </div>
                    </div>
                </CardFooter>
            </div>
        </Card>
    );
};

export default MainPostCard;
