import { FC } from "react";

interface ButtonProps {
  handleOnclick: () => void;
  label: string;
}

const Button: FC<ButtonProps> = ({ handleOnclick, label }) => (
  <div className="sm:p-5">
    <button
      type="button"
      className="text-base border-indigo-200 bg-blue-50 active:bg-indigo-700 hover:bg-indigo-400 focus:bg-indigo-400 text-base text-white rounded-md w-auto p-1.5 sm:w-138 h-37 bg-indigo-600"
      onClick={handleOnclick}
    >
      {label}
    </button>
  </div>
);

export default Button;
