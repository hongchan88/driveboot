import React from "react";
import Cartitems from "./cartitems";

const Cart = ({ cart, removeItem, addQty }) => {
  console.log(Object.keys(cart).length);
  return (
    <>
      {Object.keys(cart).length != 0 ? (
        Object.keys(cart).map((key) => {
          return (
            <table class="w-full text-sm lg:text-base" cellspacing="0">
              <thead>
                <tr class="h-12 uppercase">
                  <th class="hidden md:table-cell"></th>
                  <th class="text-left">Product</th>
                  <th class="lg:text-right text-left pl-5 lg:pl-0">
                    <span class="lg:hidden" title="Quantity">
                      Qtd
                    </span>
                    <span class="hidden lg:inline">Quantity</span>
                  </th>
                  <th class="hidden text-right md:table-cell">Unit price</th>
                  <th class="text-right">Total price</th>
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
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200 my-10" />
            <div class="flex justify-center">
              <p class="text-lg">No products added in the cart</p>
            </div>
            <div className="border-t border-gray-200 my-10" />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
