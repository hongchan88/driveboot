import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Orderproducts from "../../buyer/orderhistory/orderproducts";
import Orderstatuscomponent from "./orderstatuscomponent";
import "./style.css";

const SellerOrderList = ({
  id,
  sellerOrder,

  updatedSellerOrderStatus,
}) => {
  const status = sellerOrder.OrderStatus;

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
      <section className="flex justify-between h-1/2 ">
        <section className="flex flex-col">
          <div>
            <p className="font-bold text-lg">Order #{sellerOrder.id}</p>
          </div>
          <div>
            <Popup
              trigger={
                <p className="test-sm cursor-pointer"> View ordered product </p>
              }
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
                  {Object.keys(sellerOrder.cart).map((key) => {
                    return (
                      <Orderproducts key={key} items={sellerOrder.cart[key]} />
                    );
                  })}
                </tbody>
              </table>
              <div className="flex w-full justify-center">
                <p className="font-bold text-xl">
                  Total: ${sellerOrder.totalprice}
                </p>
              </div>
            </Popup>
          </div>
          <div className="container flex px-5 py-5 ">
            <div className="flex justify-center items-center">
              <img
                className="inline object-cover w-16 h-16 mr-2 rounded-full"
                src={sellerOrder?.buyerProfileImg}
                alt="Profile"
              />
            </div>
            <div className="flex justify-center items-center">
              <ul>
                <li>{sellerOrder?.firstname}</li>
                <li>{sellerOrder?.email}</li>
                <li>
                  {sellerOrder?.arrived
                    ? "Arrived at pick up point"
                    : "Customer not yet arrived"}
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="flex justify-end w-1/2">
          <div className="grid grid-cols-2 w-full ">
            <div>
              <p className="font-bold">Payment</p>

              <p>{sellerOrder.payment}</p>
            </div>
            <div>
              <p className="font-bold">Car Number</p>
              <p>{sellerOrder.plate}</p>
            </div>
            <div>
              <p className="font-bold">Pick up Date/Time</p>
              <p>
                {sellerOrder.date} / {sellerOrder.time}
              </p>
            </div>

            <div>
              <p className="font-bold">Order created</p>
              <p>{sellerOrder.createdTime}</p>
            </div>
          </div>
        </section>
      </section>

      <div className="border-t border-gray-200 w-full mt-12"></div>
      <div className="flex flex-col justify-center text-lg h-3/6">
        <span className="font-bold text-lg">
          <Orderstatuscomponent
            status={status}
            updatedSellerOrderStatus={updatedSellerOrderStatus}
            sellerOrder={sellerOrder}
            id={id}
          />
        </span>
      </div>
      {status === "4" ? null : (
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
      )}
    </div>
  );
};

export default SellerOrderList;
