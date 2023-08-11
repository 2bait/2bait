import React, { FC } from "react";

type LinkProps = {
    link: string;
    name: string;
    isCurent: boolean;
    toggleNavigation: any;
};

const Link: FC<LinkProps> = ({ link, name,isCurent, toggleNavigation }) => {
    return (
        <li className={isCurent ? 'current':''}>
            <a href={`#${link}`} onClick={toggleNavigation}>{name}</a>
        </li>
    )
};

export default Link;
