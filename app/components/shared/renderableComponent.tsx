import React, { FC } from "react";
import { Renderable } from "../../../src/data/types";
import RenderImportant from "./renderImportant";
import RenderLink from "./renderLink";
import RenderList from "./renderList";
import RenderParagraph from "./renderParagraph";
import RenderPills from "./renderPills";

type RenderableComponentProps = {
  data: Renderable;
  className?: string;
};

const RenderableComponent: FC<RenderableComponentProps> = ({ data, className }) => {
  if (typeof data === "string") {
    return <>{data}</>;
  }

  if (data.type === "important") {
    return <RenderImportant>{data.text}</RenderImportant>;
  }

  if (data.type === "link") {
    return <RenderLink inline={data.inline} title={data.text} href={data.href} />;
  }

  if (data.type === "newline") {
    return <br />;
  }

  if (data.type === "paragraph") {
    return <RenderParagraph items={data.items} className={className} />;
  }

  if (data.type === "list") {
    return <RenderList items={data.items} className={className} />;
  }

  if (data.type === "pills") {
    return <RenderPills items={data.items} />;
  }

  return null;
};

export default RenderableComponent;