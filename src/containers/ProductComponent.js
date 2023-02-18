import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../redux/actions/productActions";
// import { fetchProducts } from "../redux/reducers/productSlice";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const renderList = products.map((prod) => {
    const { id, title, image, category, price } = prod;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="ui grid container">{renderList}</div>;
};

export default ProductComponent;
