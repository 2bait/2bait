import React, { FC } from "react";
import { Renderable as RenderableType } from "../../../src/data/types";
import RenderableComponent from "./renderableComponent";

type RenderListProps = {
  items: RenderableType[];
  className?: string;
};

const RenderList: FC<RenderListProps> = ({ items = [], className }) => {
  return (
    <ul className={`${className}`}>
      {items.map((item, itemIndex) => (
        <li
          key={itemIndex}
        >          
          <RenderableComponent data={item} />
        </li>
      ))}
    </ul>
  );
};

export default RenderList;