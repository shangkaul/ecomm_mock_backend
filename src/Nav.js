import "./App.css";
import { Link } from "react-router-dom";
import { useProductFilter } from "./context/productFilterContext";

function Nav() {
  const {
    filterState: { searchKeyword },
    filterStateDispatch
  } = useProductFilter();

  return (
    <nav>
      <div className="nav-bar">
        <ul className="nav-group start">
          <li>
            {" "}
            <Link to="/">
              {" "}
              <h2 className="logo">Shop - olio</h2>
            </Link>
          </li>
        </ul>
        <div className="search-bar">
          <input
            className="textbox"
            placeholder="Search"
            value={searchKeyword}
            onChange={(e) =>
              filterStateDispatch({ type: "SEARCH", payload: e.target.value })
            }
          />{" "}
          <button className="btn search-btn">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <ul className="nav-group end">
          <li>
            {" "}
            <Link to="/login">
              <button className="btn btn-sleek"> Login </button>
            </Link>
          </li>

          <li>
            <Link to="/wishlist">
              <i className="icon icon-sm fa fa-heart">
                <span className="badge badge-sm badge-inactive">3</span>
              </i>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="icon icon-sm fa fa-shopping-cart">
                <span className="badge badge-sm badge-inactive">3</span>
              </i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
