'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type LinkProps = {
    link: string;
    name: string;
    isSelected?: boolean;
};

export default function NavigationLink({ link, name, isSelected }:LinkProps)  {
    
  //TODO: add active state based on scroll position over section
    return (
              <Link  href={link} scroll ={ true } className={`nav-link ${(isSelected) ? "nav-link-active" : ""}`}  transitionTypes={['slide-in']}  >
                {name}
             </Link>
    )
};
