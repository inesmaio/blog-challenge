import { FC, useCallback, useState } from "react";
import Button from "./button.component";

export interface NewPostProps {
  title: string;
  textareaPlaceholder: string;
  classes: string;
  userProfileImgUrl: string;
  closeAction: () => void;
  saveDataAction: (reply: string) => Promise<void>;
}

const NewPost: FC<NewPostProps> = ({
  title,
  textareaPlaceholder,
  classes,
  userProfileImgUrl,
  closeAction,
  saveDataAction,
}) => {
  const [reply, setReply] = useState<string>("");

  // Get value from textarea new post component
  const handleChangeReplyValue = useCallback(
    (event: React.FormEvent<HTMLTextAreaElement>) => {
      setReply(event.currentTarget.value);
    },
    []
  );

  // Close the new comment section
  const onClose = useCallback(() => {
    setReply("");
    closeAction();
  }, [closeAction]);

  // Save the new post on the API
  const onSave = useCallback(async () => {
    await saveDataAction(reply);
    closeAction();
  }, [closeAction]);

  return (
    <section
      className={`${classes} fixed bottom-0 flex z-10 rounded-t-lg p-2 sm:pl-10 bg-white flex flex-col sticky shadow-2xl pb-5 w-11/12 h-150 sm:w-4/6 sm:h-300`}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <img
            className="rounded-full h-39 w-39 border-2"
            src={userProfileImgUrl}
          />
          <h1 className="text-title font-semibold font-semibold text-left py-5 pl-5">
            {title}
          </h1>
        </div>
        <Button handleOnclick={onClose} label="Close" />
      </div>
      <textarea
        className="resize my-5 h-96 w-66 border rounded-md bg-gray-50 focus:bg-blue-50 outline-none"
        onChange={handleChangeReplyValue}
        placeholder={textareaPlaceholder}
        id="inputValue"
        name="inputValue"
        value={reply}
      />
      <Button handleOnclick={onSave} label="Reply" />
    </section>
  );
};

export default NewPost;
