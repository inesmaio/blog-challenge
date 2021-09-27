import { FC } from "react";
import { PostsProps } from "../types";

type CardProps = Pick<
  PostsProps,
  "userName" | "comment" | "userProfileImgUrl" | "id"
>;

const CardPost: FC<CardProps> = ({
  userName,
  comment,
  userProfileImgUrl,
  id,
}) => (
  <section
    className="m-5 sm:m-20 pb-10 border-b-2 flex flex-col sm:flex-row"
    key={id}
  >
    <div className="mx-5">
      <img className="rounded-full h-39 w-39" src={`${userProfileImgUrl}`} />
      <h1 className="text-title font-semibold font-semibold text-left pb-5">
        {userName}
      </h1>
    </div>
    <p className="text-base text-left">{comment}</p>
  </section>
);

export default CardPost;
