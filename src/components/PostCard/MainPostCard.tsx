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

// interface TaskButtonProps {
//     type: "delete-btn" | "done-btn" | "undone-btn";
//     label: string;
//     onClick: () => void;
// }

const MainPostCard: React.FC = () => {
    return (
        <Card
            className="main-post-card flex flex-row
             p-8 hover:shadow-md hover:shadow-theme-text-secondary rounded-sm border-[1px] border-theme-border
            bg-theme-primary gap-1 
             h-[370px]"
        >
            <div className="main-post-card-left flex flex-col justify-between w-1/2 pr-3 ">
                <div>
                    <CardHeader className="p-0 cursor-pointer">
                        <CardTitle className="text-theme-text-primary font-playfair text-3xl font-semibold pt-2 leading-tight">
                            Micro-Interactions: Small Details, Big Impact in UX
                        </CardTitle>
                        <CardDescription className="text-theme-text-secondary text-lg font-mono">
                            22/04/2025
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 cursor-pointer">
                        <p className="leading-tight text-theme-text-primary text-xl line-clamp-5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
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
                            <p className="author-name text-theme-text-secondary font-roboto text-md">
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
            </div>
            <div className="main-post-card-right w-1/2 place-items-center ">
                <img
                    src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                    alt=""
                />
            </div>
        </Card>
    );
};

export default MainPostCard;
