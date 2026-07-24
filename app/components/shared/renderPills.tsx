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
            className="pill"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RenderPills;