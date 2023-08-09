import React, { FC } from "react";
import { Renderable as RenderableType } from "../data/types";
import RenderableComponent from "./renderableComponent";

type ParagraphProps = {
  items: RenderableType[];
};

const RenderParagraph: FC<ParagraphProps> = ({ items }) => {
  return (
    <p className="mt-2.1 text-md text-gray-700 leading-normal">
      {items.map((child, childIndex) => (
        <React.Fragment key={childIndex}>
          <RenderableComponent data={child} />{" "}
        </React.Fragment>
      ))}
    </p>
  );
};

export default RenderParagraph;