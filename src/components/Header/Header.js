import "./style.css";
import Navbar from "./Navbar";
import Category from "./Category";

const Header = () => {
  return (
    <header className="app__header">
      <Navbar />
      <Category />
    </header>
  );
};

export default Header;
