import React from "react";
import { useSelector } from "react-redux";

const ProductsTable = () => {
  const cartProds = useSelector((state) => state.cart.cartItems);
  const cartTotal = cartProds.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItems = cartProds.reduce((a, b) => (a += b.quantity), 0);

  return (
    <>
      <div className="table__container">
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartProds.map((prod, index) => {
              return (
                <tr key={prod.name + index}>
                  <td>
                    {prod.name}({prod.size})
                  </td>
                  <td>{prod.quantity}</td>
                  <td>${Number(prod.price) * Number(prod.quantity)}</td>
                </tr>
              );
            })}
            <tr className="table__subtotal">
              <td>Subtotal</td>
              <td>{totalItems}</td>
              <td>${cartTotal}</td>
            </tr>
            <tr className="table__shipping">
              <td>Envío</td>
              <td></td>
              <td>$500</td>
            </tr>

            <tr className="table__total">
              <td>Total</td>
              <td>{totalItems}</td>
              <td>${cartTotal + 500}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductsTable;
