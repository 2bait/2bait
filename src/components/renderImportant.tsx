import React, { FC } from "react";

type ImportantProps = {
  children: string;
};

const RenderImportant: FC<ImportantProps> = ({ children }) => {
  return (
    <span className="font-medium text-gray-600 print:text-black">
      {children}
    </span>
  );
};

export default RenderImportant;