import CategoryList from "../../constants/category";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="header__category-lists">
      <ul className="header__category-lists-links">
        {CategoryList.map((category, index) => (
          <li key={index}>
            <Link to={`/category${category.url}`}>{category.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
