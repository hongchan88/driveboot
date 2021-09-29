import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Orderproducts from "./orderproducts";
import PopupAsk from "./popupAsk";
import "./style.css";

const Order = ({ order, deleteOrder, updateArriveStatus }) => {
  const status = order?.OrderStatus;
  const arrived = order?.arrived;

  const custArrived = () => {
    updateArriveStatus(order);
  };

  const statusDesc = (status) => {
    switch (status) {
      case "0":
        return "Order is placed! ";
      case "1":
        return "Seller confirmed your order . Order is being processed";
      case "2":
        return (
          <>
            {!arrived ? (
              <>
                <span> Ready to pick up!</span>
                <PopupAsk
                  askQ={
                    "This will send a notification to the seller that you have arrived. Are you at the pick up point?"
                  }
                  custArrived={custArrived}
                />
                <span> when you're arrived at the pick up point</span>
              </>
            ) : (
              <span>
                Notification sent to seller. You will be in contact shortly
              </span>
            )}
          </>
        );
      case "3":
        return "finished pick up";
      default:
        break;
    }
  };

  const statusBar = (status) => {
    switch (status) {
      case "0":
        return "1/5";
      case "1":
        return "2/5";
      case "2":
        return "3/5";
      case "3":
        return "5/5";
      default:
        break;
    }
  };
  return (
    <div className="flex flex-col h-full">
      <div className="relative">
        <Popup
          className="my-popup"
          trigger={
            <button className="absolute right-0 top-0 transform hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          }
          modal
        >
          {(close) => (
            <div className="modal">
              <div className="absolute right-2 top-0">
                <button className="close" onClick={close}>
                  &times;
                </button>
              </div>

              <div className="text-2xl flex justify-center">
                Are you sure to cancel this order?
              </div>
              <div className="flex justify-evenly">
                <button
                  className="w-1/3 mt-10 py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => deleteOrder(order.id, order.shopid)}
                >
                  Confirm
                </button>
                <button
                  className="w-1/3 mt-10 py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  onClick={() => {
                    close();
                  }}
                >
                  No
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
      <section className="flex justify-between h-1/2 ">
        <section className="flex flex-col">
          <div>
            <p className="font-bold text-lg">Order #{order && order.id}</p>
          </div>
          <div>
            <Popup
              trigger={<p className="test-sm cursor-pointer"> View product </p>}
              modal
            >
              <table className="w-full text-sm lg:text-base" cellSpacing="0">
                <thead>
                  <tr className="h-12 uppercase">
                    <th className="hidden md:table-cell"></th>
                    <th className="text-left">Product</th>
                    <th className="lg:text-right md:text-center text-left pl-5 lg:pl-0">
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
                  {Object.keys(order?.cart).map((key) => {
                    return <Orderproducts key={key} items={order.cart[key]} />;
                  })}
                </tbody>
              </table>
              <div className="flex w-full justify-center">
                <p className="font-bold text-xl">Total: ${order.totalprice}</p>
              </div>
            </Popup>
          </div>
          <div>
            <Link to={`/shop/${order.shopid}`}>
              <p className="text-sm cursor-pointer">
                {order.shopname} Shop page
              </p>
            </Link>
          </div>
        </section>
        <section className="flex justify-end w-1/2">
          <div className="grid grid-cols-2 w-full ">
            <div>
              <p className="font-bold">Payment</p>

              <p className="text-sm">{order.payment}</p>
            </div>
            <div>
              <p className="font-bold">Car Number</p>
              <p>{order.plate}</p>
            </div>
            <div>
              <p className="font-bold">Pick up Date</p>
              <p>{order.date}</p>
            </div>
            <div>
              <p className="font-bold">Pick up Time</p>
              <p>{order.time}</p>
            </div>
          </div>
        </section>
      </section>

      <div className="border-t border-gray-200 w-full mt-12"></div>
      <div className="flex flex-col justify-center text-lg h-3/6">
        <span className="font-bold text-lg">{statusDesc(status)}</span>
      </div>
      <section className="flex h-1/2 items-center">
        <div className="grid grid-cols-6 w-full">
          <div className="col-span-6">
            <div className="h-3 relative w-full rounded-full overflow-hidden">
              <div className="w-full h-full bg-gray-200 absolute"></div>

              <div
                id="bar"
                className={`transition-all ease-out duration-1000 h-full bg-green-500 relative w-${statusBar(
                  status
                )}`}
              ></div>
            </div>
          </div>
          <div className="col-start-1 col-end-1 text-sm">
            <span>Order Placed</span>
          </div>
          <div className="col-start-3 col-end-3 text-sm">
            <span className="flex justify-start">Process</span>
          </div>
          <div className="col-start-4 col-span-1 text-sm ">
            <span className="flex justify-center">Ready</span>
          </div>
          <div className="col-start-6 col-end-6 text-sm ">
            <span className="flex justify-end">Picked up</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
