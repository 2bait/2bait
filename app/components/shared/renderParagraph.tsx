import React, { FC } from "react";
import { Renderable as RenderableType } from "../../../src/data/types";
import RenderableComponent from "./renderableComponent";

type ParagraphProps = {
  className?:string;
  items: RenderableType[];
};

const RenderParagraph: FC<ParagraphProps> = ({ items, className }) => {
  return (
    <p className={className}>
      {items.map((child, childIndex) => (
        <React.Fragment key={childIndex}>
          <RenderableComponent data={child} />{" "}
        </React.Fragment>
      ))}
    </p>
  );
};

export default RenderParagraph;