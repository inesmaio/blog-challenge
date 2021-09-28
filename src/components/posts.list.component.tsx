import { FC } from "react";
import { Virtuoso } from "react-virtuoso";
import { PostsListProps, PostsProps } from "../types";
import Button from "./button.component";
import CardPost from "./card.post.component";

const PostsList: FC<PostsListProps> = ({
  posts,
  loadMore,
  NewCommentBoxAction,
}) => (
  <div className="w-full text-center h-screen mt-48 sm:mt-28">
    <aside className="fixed hidden md:flex top-44 md:right-4">
      <Button handleOnclick={NewCommentBoxAction} label="Comment" />
    </aside>
    <Virtuoso
      useWindowScroll
      style={{ width: "80%", height: "100%" }}
      data={posts}
      endReached={loadMore}
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

export default PostsList;
