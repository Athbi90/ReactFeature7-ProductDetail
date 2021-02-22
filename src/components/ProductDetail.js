import App from "../App";
import products from "../products";
import ProductList from "./ProductList";
import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
  let allProducts = products;
  return (
    <DetailWrapper>
      <h1>{props.product.name}</h1>
      <img src={props.product.image} alt={props.product.name} />
      <p>{props.product.description}</p>
      <p>{props.product.price} KD</p>
    </DetailWrapper>
  );
};

export default ProductDetail;
