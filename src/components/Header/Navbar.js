import { BiHome } from "react-icons/bi";
import { RiFlashlightLine } from "react-icons/ri";
import { BsPatchCheck } from "react-icons/bs";
import { AiOutlineSwitcher, AiOutlineUser } from "react-icons/ai";
import { HiOutlineCollection } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import logo2 from "../../assets/logo2.webp";

const Navbar = () => {
  return (
    <div className="header__navigation">
      <div className="header__navigation-brand">
        <img src={logo2} alt="logo" />
      </div>
      <ul className="header__navigation-links">
        <li className="header__navigation-link-item">
          <BiHome className="header__icon" />
          <span>Home</span>
        </li>
        <li className="header__navigation-link-item">
          <RiFlashlightLine className="header__icon" />
          <span>Trending</span>
        </li>
        <li className="header__navigation-link-item">
          <BsPatchCheck className="header__icon" />
          <span>Verified</span>
        </li>
        <li className="header__navigation-link-item">
          <HiOutlineCollection className="header__icon" />
          <span>Collections</span>
        </li>
        <li className="header__navigation-link-item">
          <FiSearch className="header__icon" />
          <span>Search</span>
        </li>
        <li className="header__navigation-link-item">
          <AiOutlineUser className="header__icon" />
          <span>Account</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
