import { PostsProps } from "../types";

interface ResFetchPostsProps {
    total_pages: number,
    next_page?: number,
    per_page: number,
    prev_page?: number,
    total: number,
    page: number,
    posts: PostsProps[]
}

export const fetchPosts = async (validated: boolean, page?: number): Promise<ResFetchPostsProps> => {
    const res = await fetch(validated ? `/api/posts?page=${page}&filter=validated` : `/api/posts?page=${page}`);
    const jsonRes = await res.json();
    return jsonRes
}

export const savePost = async (userName: string, userProfileImgUrl: string, post: string): Promise<PostsProps> => {
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName: userName,
            userProfileImgUrl: userProfileImgUrl,
            comment: post,
            validated: false,
        })
    }
    const res = await fetch('api/posts', settings);
    const jsonRes = await res.json();
    return jsonRes.posts
}

