import { useContext } from "react";
import { BookContext } from "./App";

function Product(props) {
  const context = useContext(BookContext);
  console.log(context);
  return (
    <div>
      <div>Shooping App</div>

      <div>Cart</div>
      <div className="cardLayout">
        {context.state.bookList.map((item, index) => {
          return (
            <div key={index} className="card">
              <div className="cardDetail">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  width="100px"
                  height="150px"
                ></img>
                <div className="cardDetailLayout">
                  <p className="cardTitle">{item.title}</p>
                  <p className="cardDetailText">
                    Author: {item.author} - Price :{item.price} &#8378;
                  </p>
                  <button
                    className="block"
                    onClick={() => context.addCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
