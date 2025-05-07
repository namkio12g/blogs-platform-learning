import React, { useEffect, useMemo, useState } from "react";
import apiClient from "../../api/TaskAPI";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const AddNewPostPage: React.FC = () => {
    return (
        <div
            className="post-detail-container 
        place-items-center  bg-theme-primary w-12/12"
        >
            <Card
                className="post-card-detail  px-5 py-5   min-h-screen  rounded-none
            text-theme-text-primary  bg-theme-secondary border-theme-border w-full"
            >
                <CardHeader>
                    <CardTitle className="text-center">
                        <span className="container-tittle text-4xl font-playfair font-bold">
                            Create Your Own Post
                        </span>
                    </CardTitle>
                </CardHeader>

                <CardContent className="p-0 text-lg text-roboto">
                    <div>
                        <form>
                            <Input placeholder="shadcn" />
                        </form>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default AddNewPostPage;
