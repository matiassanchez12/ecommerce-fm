import { useContext, useMemo, useState } from "react";
import { iconCart, iconMenu, imageAvatar, logo } from "../../assets";
import { navLinks } from "../../constants";
import { CartContext } from "../../context";
import { Modal, NavLink } from "../ui";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { products } = useContext(CartContext);
  const totalQuantity =
    useMemo(
      () =>
        products.length > 0 &&
        products.reduce((acum, item) => {
          return acum + item.quantity;
        }, 0),
      [products]
    ) || 0;

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <nav className="flex h-[130px] w-full justify-between items-center relative">
      <img src={iconMenu} alt="logo" className="cursor-pointer sm:hidden block" />
      <img src={logo} alt="logo" className="cursor-pointer" />
      <div className="w-[100px]" />
      <ul className="list-none sm:flex hidden justify-start items-center flex-1 h-full">
        {navLinks.map((nav, index) => (
          <NavLink index={index} navLinkItem={nav} navLinksLenght={navLinks.length} key={index} />
        ))}
      </ul>
      <div className="flex items-center justify-center sm:gap-16 gap-10">
        <div className="relative cursor-pointer" onClick={handleToggle}>
          <img src={iconCart} alt="cart" className="cursor-pointer" />
          <span className="bg-color-orange absolute bottom-3 left-2 px-[10px] p-0 text-[12px] h-[16px] items-center color-white border-r-sm flex">
            {totalQuantity}
          </span>
        </div>
        <img src={imageAvatar} alt="avatar" className="sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] cursor-pointer" />
      </div>

      {isOpen && <Modal handleToggle={handleToggle} />}
    </nav>
  );
};

export default Navbar;
