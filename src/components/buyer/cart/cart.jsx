import React from "react";
import Cartitems from "./cartitems";

const Cart = ({ cart, removeItem, addQty, key }) => {
  return (
    <div className="mt-24">
      {Object.keys(cart).length !== 0 ? (
        Object.keys(cart).map((key) => {
          return (
            <table
              key={key}
              className="w-full text-sm lg:text-base"
              cellSpacing="0"
            >
              <thead>
                <tr className="h-12 uppercase">
                  <th className="hidden md:table-cell"></th>
                  <th className="text-left">Product</th>
                  <th className="lg:text-right text-left pl-5 lg:pl-0">
                    <span className="lg:hidden" title="Quantity">
                      Qtd
                    </span>
                    <span className="hidden lg:inline">Quantity</span>
                  </th>
                  <th className="hidden text-right md:table-cell">
                    Unit price
                  </th>
                  <th className="text-right">Total price</th>
                </tr>
              </thead>
              <tbody>
                <Cartitems
                  key={key}
                  items={cart[key]}
                  removeItem={removeItem}
                  addQty={addQty}
                />
              </tbody>
            </table>
          );
        })
      ) : (
        <div className="-mt-12 ">
          <div className="py-5">
            <div className="border-t border-gray-200 my-10" />
            <div className="flex justify-center">
              <p className="text-lg">No products added in the cart</p>
            </div>
            <div className="border-t border-gray-200 my-10" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
