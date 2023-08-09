import React, { FC } from "react";

type LinkProps = {
    link: string;
    name: string;
};

const Link: FC<LinkProps> = ({ link, name }) => {
    return (
        <li>
            <a className='smoothscroll' href={`#${link}`}>{name}</a>
        </li>
    )
};

export default Link;
