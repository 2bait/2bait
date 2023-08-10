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
        >          
          <span className='bullet-point'>&bull; </span>
          <RenderableComponent data={item} />
        </li>
      ))}
    </ul>
  );
};

export default RenderList;