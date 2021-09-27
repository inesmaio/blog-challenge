import { FC } from "react";
import Button from "./button.component";
import Toggle from "./toggle.component";

interface headerProps {
    toggleAction: () => void;
    NewCommentBoxAction: () => void;
}

const Header: FC<headerProps> = ({
  toggleAction,
  NewCommentBoxAction,
}) => (
  <section className="flex flex-col sm:h-20 sm:flex-row justify-between items-center text-center text-sm h-40 p-5 bg-gray-100 border-b w-full sticky top-0 sm:pl-10 z-10">
    <Toggle handleOnChange={toggleAction} />
    <h1 className="p-0 text-xl sm:p-10">InnovationCast Challenge</h1>
    <aside className="flex items-center">
      <Button handleOnclick={NewCommentBoxAction} label="Comment" />
    </aside>
  </section>
);

export default Header;
