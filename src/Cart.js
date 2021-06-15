import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "./App";

function Cart() {
  const context = useContext(BookContext);
  return (
    <div>
      <div>
        <Link to="/">Booking List</Link>
      </div>

      <div>Cart</div>
      <div className="cardLayout">
        {context.state.cart.map((item, index) => {
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
                    Sepetinizde {item.count} ürün var
                  </p>
                  <div>
                    <p className="cardDetailText">
                      Price :{item.price} &#8378; -Total Price:
                      {item.price * item.count}
                      <button onClick={() => context.decrease(item.id)}>
                        Delete
                      </button>
                      <button onClick={() => context.increase(item.id)}>
                        Add
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
