import { FC, useState } from "react";
import { INavLinkItem } from "../../interfaces/index";

interface Props {
  navLinkItem: INavLinkItem;
  index: number;
  navLinksLenght: number;
}

export const NavLink: FC<Props> = ({ navLinkItem, index, navLinksLenght }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      key={navLinkItem.id}
      className={`flex items-center font-kumbh h-full text-[16px] ${
        index === navLinksLenght - 1 ? "mr-0" : "mr-10"
      } color-darkgrayish-blue nav-links ${isHovered && "nav-links-hover"}`}
    >
      <a
        href={`#${navLinkItem.id}`}
        className="cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {navLinkItem.title}
      </a>
    </li>
  );
};
