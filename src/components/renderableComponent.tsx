import React, { FC } from "react";
import { Renderable } from "../data/types";
import RenderImportant from "./renderImportant";
import RenderLink from "./renderLink";
import RenderList from "./renderList";
import RenderParagraph from "./renderParagraph";
import RenderPills from "./renderPills";

type RenderableComponentProps = {
  data: Renderable;
};

const RenderableComponent: FC<RenderableComponentProps> = ({ data }) => {
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
    return <RenderParagraph items={data.items} />;
  }

  if (data.type === "list") {
    return <RenderList items={data.items} />;
  }

  if (data.type === "pills") {
    return <RenderPills items={data.items} />;
  }

  return null;
};

export default RenderableComponent;