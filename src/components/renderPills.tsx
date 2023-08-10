import React, { FC } from "react";

type RenderPillsProps = {
  items: string[];
};

const RenderPills: FC<RenderPillsProps> = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item, i) => (
          <li
            key={i}
            className="bg-gray-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RenderPills;