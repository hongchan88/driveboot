import React from "react";
import Shopdetail from "../shopdetail/shopdetail";
import styles from "./ordermain.module.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Orderproducts from "./orderproducts";
import "./style.css";
import Pickuplocation from "../shopdetail/pickuplocation";

const Order = ({ order }) => {
  console.log(order);
  return (
    <div class="flex flex-col h-full">
      <section class="flex justify-between h-1/2 ">
        <section class="flex flex-col">
          <div>
            <p class="font-bold text-lg">Order #{order.id}</p>
          </div>
          <div>
            <Popup
              trigger={<p class="test-sm cursor-pointer"> View product </p>}
              modal
            >
              <table class="w-full text-sm lg:text-base" cellspacing="0">
                <thead>
                  <tr class="h-12 uppercase">
                    <th class="hidden md:table-cell"></th>
                    <th class="text-left">Product</th>
                    <th class="lg:text-right md:text-center text-left pl-5 lg:pl-0">
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
                  {Object.keys(order.cart).map((key) => {
                    return <Orderproducts key={key} items={order.cart[key]} />;
                  })}
                </tbody>
              </table>
              <div class="flex w-full justify-center">
                <p class="font-bold text-xl">Total: ${order.totalprice}</p>
              </div>
            </Popup>
          </div>
          <div>
            <Popup
              trigger={
                <p class="text-sm cursor-pointer">
                  {order.shopname} pick up location
                </p>
              }
              modal
            >
              <Pickuplocation name={order.shopname} />
            </Popup>
          </div>
        </section>
        <section class="flex justify-end w-1/2">
          <div class="grid grid-cols-2 w-full ">
            <div>
              <p class="font-bold">Payment</p>

              <p class="text-sm">{order.payment}</p>
            </div>
            <div>
              <p class="font-bold">Car Number</p>
              <p>{order.plate}</p>
            </div>
            <div>
              <p class="font-bold">Pick up Date</p>
              <p>{order.date}</p>
            </div>
            <div>
              <p class="font-bold">Pick up Time</p>
              <p>{order.time}</p>
            </div>
          </div>
        </section>
      </section>

      <div className="border-t border-gray-200 w-full mt-12"></div>
      <div class="flex flex-col justify-center text-lg h-3/6">
        <span class="font-bold text-lg">Order is ready to pick up</span>
      </div>
      <section class="flex h-1/2 items-center">
        <div class="grid grid-cols-6 w-full">
          <div class="col-span-6">
            <div class="h-3 relative w-full rounded-full overflow-hidden">
              <div class="w-full h-full bg-gray-200 absolute"></div>

              <div
                id="bar"
                class="transition-all ease-out duration-1000 h-full bg-green-500 relative w-3/5"
              ></div>
            </div>
          </div>
          <div class="col-start-1 col-end-1 text-sm">
            <span>Order Placed</span>
          </div>
          <div class="col-start-3 col-end-3 text-sm">
            <span class="flex justify-start">Process</span>
          </div>
          <div class="col-start-4 col-span-1 text-sm ">
            <span class="flex justify-center">Ready</span>
          </div>
          <div class="col-start-6 col-end-6 text-sm ">
            <span class="flex justify-end">Picked up</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
