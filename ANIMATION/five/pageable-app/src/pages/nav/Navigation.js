import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/film">Film</Link>
          </li>
          <li>
            <Link to="/cars">Favourite Cars</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};


export default Navigation;