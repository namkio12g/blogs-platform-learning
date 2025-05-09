// export type PostTags =
//     | "Technology"
//     | "Music"
//     | "Sport"
//     | "Revolution"
//     | "Art"
//     | "Political"
//     | "Healthy";

export const validTags: string[] = [
    "Technology",
    "Music",
    "Sport",
    "Revolution",
    "Art",
    "Political",
    "Healthy",
];

export type AddPostData = {
    title: string;
    tags: string[];
    content: string;
    author: string;
    date: Date;
};
export type PostData = {
    id: string;
    title: string;
    tags: string[];
    content: string;
    author: string;
    date: Date;
};
