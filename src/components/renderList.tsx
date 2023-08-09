import React, { FC } from "react";
import { Renderable as RenderableType } from "../data/types";
import RenderableComponent from "./renderableComponent";

type RenderListProps = {
  items: RenderableType[];
};

const RenderList: FC<RenderListProps> = ({ items = [] }) => {
  return (
    <ul>
      {items.map((item, itemIndex) => (
        <li
          key={itemIndex}
          className="mt-2.1 text-md text-gray-700 leading-normal"
        >
          <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
            ›
          </span>
          <RenderableComponent data={item} />
        </li>
      ))}
    </ul>
  );
};

export default RenderList;