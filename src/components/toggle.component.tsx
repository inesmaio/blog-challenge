import React, { FC, useState } from "react";

interface toggleProps {
    handleOnChange: () => void;
}

const Toggle: FC<toggleProps> = ({
    handleOnChange
}) => {
    return (
        <div className="flex sm:flex-col items-center">
            <p className="mr-3 text-sm p-2 ">Show Only Validated Posts</p>
            <label className="flex items-center relative w-max cursor-pointer select-none">
                <input type="checkbox" onChange={handleOnChange} className="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none bg-red-500" />
                <span className="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200" />
            </label>
        </div>
    )
}

export default Toggle