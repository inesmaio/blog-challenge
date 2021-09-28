export interface PostsProps {
    comment: string,
    id: number,
    postedOn: Date,
    userName: string,
    userProfileImgUrl?: string,
    validated: boolean,
}

export interface PostsListProps {
    posts: Array<PostsProps>;
    loadMore: () => Promise<void>;
    NewCommentBoxAction: () => void
}
