import { FC } from "react";
import { Virtuoso } from "react-virtuoso";
import { PostsListProps, PostsProps } from "../types";
import CardPost from "./card.post.component";

const PostsList: FC<PostsListProps> = ({ posts }) => {
  return (
    <div className="w-screen text-center h-900">
      <Virtuoso
        useWindowScroll
        style={{ width: "100%", height: "100%" }}
        data={posts}
        itemContent={(index: number, post: PostsProps) => (
          <CardPost
            userName={post.userName}
            comment={post.comment}
            userProfileImgUrl={post.userProfileImgUrl}
            key={index}
            id={post.id}
          />
        )}
      />
    </div>
  );
};

export default PostsList;
