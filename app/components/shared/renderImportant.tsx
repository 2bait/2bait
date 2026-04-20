import React, { FC } from "react";

type ImportantProps = {
  children: string;
};

const RenderImportant: FC<ImportantProps> = ({ children }) => {
  return (
    <span className="font-medium">
      {children}
    </span>
  );
};

export default RenderImportant;