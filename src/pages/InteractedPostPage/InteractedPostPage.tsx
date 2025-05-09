import React, { useEffect, useState } from "react";
import apiClient from "../../api/TaskAPI";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import AddInput from "@/components/Input/AddInput";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import "./InteractedPostPage.scss";
import { AddPostData, PostData, validTags } from "@/types/commonTypes";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";

const InteractedPostPage: React.FC = () => {
    const navigate = useNavigate();
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [editPostData, setEditPostData] = useState<PostData>();

    const { id } = useParams();
    const handleInteractPost = !id
        ? async (newPost: AddPostData) => {
              return await apiClient.post("/posts", newPost);
          }
        : async (newPost: AddPostData) => {
              return await apiClient.put(`/posts/${id}`, newPost);
          };

    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);

        if (
            data.get("title") === "" ||
            data.get("content") === "" ||
            data.get("author") === ""
        ) {
            alert("Please fill in all the fields.");
            return;
        }
        const newPost: AddPostData = {
            title: data.get("title") as string,
            content: data.get("content") as string,
            author: data.get("author") as string,
            tags: selectedTags,
            date: editPostData?.date ? editPostData.date : new Date(),
            isDelete: editPostData?.isDelete ? editPostData.isDelete : false,
        };
        await handleInteractPost(newPost)
            .then(() => {
                toast.success("Action is completed successfully");
                setTimeout(() => {
                    navigate("/posts");
                }, 700);
            })
            .catch((error) => {
                console.log(error);
                toast.error("Action is failed");
            });
    };

    const InteractedTagOnChange = (value: string) => {
        if (!validTags.includes(value)) {
            alert("Please select a valid tag");
            return;
        }
        if (selectedTags.includes(value)) return;

        setSelectedTags((prev) => [...prev, value]);
    };

    const removeTag = (value: string) => {
        if (!selectedTags.includes(value)) return;
        setSelectedTags((prev) => prev.filter((tag) => tag !== value));
    };

    useEffect(() => {
        if (id) {
            const getPost = async () => {
                await apiClient
                    .get("/posts?id=" + id)
                    .then((res) => {
                        if (res.data[0]) {
                            setEditPostData(res.data[0]);
                            setSelectedTags(res.data[0].tags);
                        }
                    })
                    .catch(() => {
                        toast.error("Something went wrong");
                    });
            };
            getPost();
        }
    }, [id]);

    if (id && !editPostData)
        return (
            <div className="text-theme-text-primary  text-2xl">
                Something went wrong
            </div>
        );
    return (
        <div
            className="post-detail-container 
            place-items-center  bg-theme-primary md:w-6/12 xs:w-11/12"
        >
            <Card
                className="post-card-detail  px-5 py-5   min-h-screen  rounded-lg
                text-theme-text-primary  bg-theme-secondary border-theme-border w-full"
            >
                <CardHeader>
                    <CardTitle className="text-center">
                        <span className="container-tittle text-4xl font-playfair font-bold">
                            Create Your Own Post
                        </span>
                    </CardTitle>
                </CardHeader>

                <form onSubmit={handleOnSubmit}>
                    <CardContent className="p-0 text-lg text-roboto">
                        <div>
                            <AddInput
                                label="Title :"
                                name="title"
                                type="text"
                                placeholder="Title"
                                defaultValue={editPostData?.title}
                                classNameInput="font-playfair w-8/12 lg:h-20 md:h-16 sm:h-12 lg:!text-5xl md:!text-3xl sm:!text-2xl xs:!text-xl mb-7 "
                                classNameLabel=" font-bold sm:text-xl xs:text-lg "
                                required={false}
                            />
                            <AddInput
                                label="Author :"
                                name="author"
                                type="text"
                                defaultValue={editPostData?.author}
                                placeholder="Author of the post"
                                classNameInput="font-playfair sm:w-1/2 xs:w-8/12 h-15 sm:!text-xl xs:!text-lg py-0 mb-7 "
                                classNameLabel=" font-bold sm:text-xl xs:text-lg "
                                required={false}
                            />

                            <div className="tags-container mb-7">
                                <div className="">
                                    <Label
                                        htmlFor="tags"
                                        className="font-bold sm:text-xl xs:text-lg font-playfair pl-1 mb-3 "
                                    >
                                        Tags :
                                    </Label>
                                    <Select
                                        onValueChange={InteractedTagOnChange}
                                    >
                                        <SelectTrigger
                                            className="w-4/12  font-playfair rounded-none border-[0px] !border-b-[1px] 
                                                border-theme-border focus:border-theme-text-primary
                                                  mr-3 mb-3"
                                            id="tags"
                                        >
                                            <SelectValue
                                                placeholder="Tags"
                                                className="text-lg"
                                            />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {validTags.map((item) => (
                                                <SelectItem value={item}>
                                                    {item}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div
                                    className="tags-content w-full max-h-24 min-h-12 border-[1px]
                                border-theme-border p-4 rounded-sm sm:text-sm xs:text-xs
                                flex flex-row flex-wrap gap-1"
                                >
                                    <p className="tag-first  px-3 py-1">
                                        Tags here
                                    </p>
                                    {selectedTags.map((item) => (
                                        <p
                                            key={item}
                                            className="tag px-3 py-1"
                                            onDoubleClick={() =>
                                                removeTag(item)
                                            }
                                        >
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <Label
                                htmlFor="content"
                                className="font-bold sm:text-xl xs:text-lg font-playfair pl-1 "
                            >
                                Your Story :
                            </Label>
                            <Textarea
                                id="content"
                                placeholder="Write your story here"
                                name="content"
                                defaultValue={editPostData?.content}
                                className="border-[1px] max-h-44 overflow-y-scroll resize-none  my-3 border-theme-text-secondary 
                                !text-xl font-playfair"
                            ></Textarea>
                        </div>
                    </CardContent>
                    <CardFooter className="px-0 place-content-end">
                        <Button
                            className="bg-theme-text-primary text-theme-primary text-lg w-28 
                        cursor-pointer hover:bg-theme-primary hover:text-theme-text-primary 
                        border-[1px] hover:border-theme-border"
                            type="submit"
                        >
                            Save
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
};

export default InteractedPostPage;
