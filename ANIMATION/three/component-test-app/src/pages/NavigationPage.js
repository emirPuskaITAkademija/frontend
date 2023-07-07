import {Link} from "react-router-dom";

function NavigationPage() {
  return (
    <>
      <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Product</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default NavigationPage;
