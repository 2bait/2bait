'use client'

type LinkProps = {
    link: string;
    name: string;
    isSelected?: boolean;
    onClick?: () => void;
};

export default function NavigationLink({ link, name, isSelected, onClick }:LinkProps)  {
    
  //TODO: add active state based on scroll position over section
    return (
              <a href={`#${link}`} className={`nav-link ${(isSelected) ? "nav-link-active" : ""}`} onClick={onClick}>
                {name}
             </a>
    )
};
