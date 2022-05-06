import { useEffect, useState } from "react";
import "../App.css";
import "./listing.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Listing() {
  const [itemList, setItemList] = useState([]);
  const [defaultList, setDefaultList] = useState([]);
  const [filterFlag, setFilterFlag] = useState(true);

  const toggleFilterFlag = () => setFilterFlag(!filterFlag);

  useEffect(() => {
    const get_items = async () => {
      try {
        let res = await axios.get("/api/products");
        setItemList(itemList.concat(res.data.products));
        setDefaultList(defaultList.concat(res.data.products));
      } catch (err) {
        console.log(err);
      }
    };
    get_items();
  }, []);

  useEffect(() => {
    let filterParams = JSON.parse(localStorage.getItem("filterState"));
    setItemList(
      filterParams.searchKeyword === ""
        ? [...defaultList]
        : itemList.filter((obj) =>
            obj["title"]
              .toLowerCase()
              .includes(filterParams.searchKeyword.toLowerCase())
          )
    );
  }, [filterFlag]);

  console.log(itemList);
  const handleRadio = (e) => {
    var name = e.target.name;
    var val = e.target.value;

    console.log(name, val);
    setItemList(itemList.filter((obj) => eval(obj[name].toString() + val)));
  };
  return (
    <div className="main-body">
      <div className="grid grid-sidemenu">
        <aside className="grid-item grid-menu">
          <div>
            <h3>Price</h3>
            <div className="check-grp" onChange={(e) => handleRadio(e)}>
              <input type="radio" name="price" value="<1000" /> Less than ₹1000{" "}
              <br />
              <input type="radio" name="price" value=">=1000" /> ₹1000 +<br />
              <input type="radio" name="price" value=">=1500" /> ₹1500 +<br />
              <input type="radio" name="price" value=">=2000" /> ₹2000 +<br />
            </div>
          </div>
          <div>
            <h3>Category</h3>
            <div className="check-grp">
              <input type="checkbox" name="category" value="Men" /> Men
              <br />
              <input type="checkbox" name="category" value="Women" /> Women
              <br />
              <input type="checkbox" name="category" value="Kids" /> Kids
              <br />
              <input type="checkbox" name="category" value="Kids" /> Footwear
              <br />
            </div>
          </div>
          <div>
            <h3>Rating</h3>
            <div className="check-grp" onChange={(e) => handleRadio(e)}>
              <input type="radio" name="rating" value=">=1" />{" "}
              <i className="menu-star fa fa-star"></i>+<br />
              <input type="radio" name="rating" value=">=2" />{" "}
              <i className="menu-star fa fa-star"></i>
              <i className="menu-star fa fa-star"></i>+<br />
              <input type="radio" name="rating" value=">=3" />{" "}
              <i className="menu-star fa fa-star"></i>
              <i className="menu-star fa fa-star"></i>
              <i className="menu-star fa fa-star"></i>+<br />
              <input type="radio" name="rating" value=">=4" />{" "}
              <i className="menu-star fa fa-star"></i>
              <i className="menu-star fa fa-star"></i>
              <i className="menu-star fa fa-star"></i>
              <i className="menu-star fa fa-star"></i>+<br />
            </div>
          </div>
          <div>
            <h3>Sort By</h3>
            <div className="check-grp">
              <input type="radio" name="sort" value="Rating" /> Rating
              <br />
              <input type="radio" name="sort" value="Price" /> Price
              <br />
            </div>
          </div>
          <br />
          <button onClick={toggleFilterFlag}>Submit</button>
        </aside>
        <section className="main-container grid-item">
          {itemList.map((item) => (
            <div className="card img-card product-card" key={item._id}>
              <span className="badge btn-round-md">
                <i className="fa fa-heart"></i>
              </span>
              <div className="card-img">
                <img alt="product image" src={item.img_url} />
              </div>
              <div className="card-content">
                <p className="sm">{item.title}</p>
                <h3>₹{item.price}</h3>
              </div>
              <div className="card-footer">
                <button className="btn btn-full-width"> Add to Cart</button>
                <button className="btn btn-full-width btn-success">
                  {" "}
                  Add to Wishlist
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Listing;
