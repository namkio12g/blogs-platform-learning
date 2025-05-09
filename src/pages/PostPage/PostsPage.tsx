import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Link, useSearchParams } from "react-router";
import { Container as PostContainer } from "@/containers/RCPosts/RCPosts";
import { Container as YourPostsContainer } from "@/containers/RCYourPosts/RCYourPosts";
import { Binoculars, Coffee } from "lucide-react";
import "./PostPage.scss";
import { validTags } from "@/types/commonTypes";
import { debounce } from "lodash";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const PostsPage: React.FC = () => {
    const [params] = useSearchParams();
    const sidebarRef = useRef<HTMLDivElement>(null);
    const feature = params.get("feature");
    const tagsSearch = params.get("tags");
    const keySearch = params.get("keyword") || "";

    const [selectedTags, setSelectedTags] = useState<string[]>(
        tagsSearch ? tagsSearch.split(",") : []
    );

    const [keyWords, setKeyWords] = useState<string>(keySearch);

    const debouncedSearch = useMemo(
        () =>
            debounce((query: string) => {
                setKeyWords(query);
            }, 700),
        []
    );
    const handleChangeKeyWords = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        console.log(value);
        debouncedSearch(value);
    };

    const addNewTagOnChange = (value: string) => {
        if (!validTags.includes(value)) {
            alert("Please select a valid tag");
            return;
        }
        if (selectedTags.includes(value)) return;

        setSelectedTags((prev) => {
            const updatedTags = [...prev, value];
            params.set("tags", updatedTags.join(","));
            window.history.replaceState(null, "", `?${params.toString()}`);
            return updatedTags;
        });
    };

    const removeTag = (value: string) => {
        if (!selectedTags.includes(value)) return;
        setSelectedTags((prev) => {
            const updatedTags = prev.filter((tag) => tag !== value);
            params.set("tags", updatedTags.join(","));
            window.history.replaceState(null, "", `?${params.toString()}`);
            return updatedTags;
        });
    };
    useEffect(() => {
        return () => {
            debouncedSearch.cancel();
        };
    }, [debouncedSearch]);

    return (
        <div className="all-tasks-container w-full flex flex-row bg-theme-third shadow-md rounded-lg p-4 place-content-center">
            <Button
                className="sidebar-button fixed left-0 top-40 bg-theme-text-primary text-theme-primary cursor-pointer z-10 
             hover:text-white hover:bg-gray-700 rounded-l-none
             md:hidden xs:block"
                onClick={() => {
                    if (sidebarRef.current) {
                        sidebarRef.current?.classList.remove("active");
                        sidebarRef.current?.classList.add("active");
                    }
                }}
            >
                <ChevronRight />
            </Button>
            <div
                className="left-container w-1/5 bg-theme-third text-theme-text-primary
                border-r-2 border-theme-border border-opacity-20 md:z-0 xs:z-15
                md:static xs:fixed  xs:h-full xs:w-[200px] xs:py-4 md:border-none xs:border-[2px]
                xs:-left-[300px] xs:top-0
                 pr-4  "
                ref={sidebarRef}
            >
                <div className="md:hidden xs:flex w-full flex-row place-content-end mb-2 ">
                    <Button
                        className="bg-theme-text-primary text-theme-primary 
                     hover:text-white hover:bg-gray-500 cursor-pointer"
                        onClick={() => {
                            if (sidebarRef.current) {
                                sidebarRef.current?.classList.remove("active");
                            }
                        }}
                    >
                        X
                    </Button>
                </div>
                <div className="tags-container mb-7">
                    <div className="">
                        <Select onValueChange={addNewTagOnChange}>
                            <SelectTrigger
                                className="w-full font-playfair rounded-none
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
                                    <SelectItem key={item} value={item}>
                                        {item}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div
                        className="tags-content w-full max-h-60 min-h-12 border-[1px]
                                border-theme-border p-4 rounded-sm sm:text-sm xs:text-xs
                                flex flex-row flex-wrap gap-1"
                    >
                        <p className="tag-first  px-3 py-1">Tags here</p>
                        {selectedTags.map((item) => (
                            <p
                                key={item}
                                className="tag px-3 py-1"
                                onDoubleClick={() => removeTag(item)}
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="mt-5 w-full px-4">
                    <ul className=" document-list text-theme-text-primary text-lg font-roboto ">
                        <li className="inline-block">
                            <input
                                onChange={handleChangeKeyWords}
                                type="text"
                                className={`search-box inline-block border-theme-text-secondary border-[1px] rounded-full 
                                        w-full h-10 px-3 placeholder:text-theme-text-primary text-theme-text-primary 
                                        text-sm mb-4  focus:outline-lime-700 
                                        `}
                                placeholder={` Search for a post...`}
                            />
                        </li>
                        <li>
                            <Link
                                to="/posts?feature=all"
                                className="item flex flex-row"
                            >
                                <Binoculars className="mr-2" />
                                Discover
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/posts?feature=yourPosts"
                                className="item flex flex-row"
                            >
                                <Coffee className="mr-2" />
                                Your blogs
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right-container md:w-4/5 xs:w-full px-3">
                {feature === "yourPosts" ? (
                    <YourPostsContainer
                        keySearch={keyWords}
                        tagsSearch={selectedTags}
                    />
                ) : (
                    <PostContainer
                        keySearch={keyWords}
                        tagsSearch={selectedTags}
                    />
                )}
            </div>
        </div>
    );
};

export default PostsPage;
