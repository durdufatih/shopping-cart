import { createContext, useState } from "react";
import "./App.css";
import Cart from "./Cart";
import { Route, Switch } from "react-router-dom";

import { items } from "./data";
import Product from "./Product";

export const BookContext = createContext();

function App() {
  const [state, setState] = useState({ bookList: items, cart: [] });

  const addCart = (book) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === book.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === book.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...book, count: 1 }],
    });
  };

  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };

  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      ),
    });
  };

  return (
    <BookContext.Provider
      value={{
        state: state,
        addCart: addCart,
        increase: increase,
        decrease: decrease,
      }}
    >
      <div className="App">
        <header className="App-header">

        <Switch>
          <Route exact path="/">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        </header>

       
      </div>
    </BookContext.Provider>
  );
}

export default App;
