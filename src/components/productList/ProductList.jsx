import "./productList.css";
import Product from "../product/Product";
import { products } from "./data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Cut and Inspire</h1>
        <p className="pl-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis nostrum consequuntur est laboriosam voluptatem, nisi natus, enim cum dolore omnis necessitatibus, obcaecati praesentium aut dignissimos tempore modi veniam id repellat?.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
