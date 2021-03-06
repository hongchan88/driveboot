import React, { useEffect, useState } from "react";
import Pagination from "../../seller/manageorder/pagination";
import buyerRepo from "../../service/buyer_repository";
import Buyerdropselect from "./buyerOrderselect";
import Order from "./order";

let PageSize = 3;
const Ordermain = ({
  order,
  deleteOrder,
  updateArriveStatus,
  setOrderData,
  user,
  firebaseBuyerRepo,
}) => {
  const [optionFilter, setOptionFilter] = useState("all");
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();

  const [currentPage, setcurrentPage] = useState(1);

  useEffect(() => {
    if (user) {
      const synoff = firebaseBuyerRepo.syncOrders(user.uid, (data) => {
        setOrderData(data);
        console.log("order updated");
      });
      return () => synoff();
    }
  }, [user]);

  const filterManageOrder = (option) => {
    switch (option) {
      case "all":
        setOptionFilter("all");
        break;
      case "current":
        setOptionFilter("current");
        break;
      case option:
        setOptionFilter(option);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (order) {
      const getFilteredData = Object.keys(order)
        .reverse()
        .filter((id) => {
          return optionFilter === "all"
            ? order[id].OrderStatus
            : optionFilter === "current"
            ? order[id].OrderStatus < 3
            : order[id].OrderStatus === optionFilter;
        });
      setFilteredData(getFilteredData);

      const currentTableData = () => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return getFilteredData.slice(firstPageIndex, lastPageIndex);
      };

      setData(currentTableData);
    }
  }, [order, optionFilter, currentPage]);

  return order && data ? (
    <div className="flex flex-col w-11/12 h-full">
      <div className="flex justify-end max-w-5xl min-w-custom">
        <Buyerdropselect filterManageOrder={filterManageOrder} />
      </div>
      {data.map((key) => (
        <div
          key={key}
          className="border-2 border-gray-100 mt-10 rounded-lg w-full h-72 max-w-5xl min-w-custom shadow-sm py-4 px-6"
        >
          {order[key] && (
            <Order
              key={key}
              order={order[key]}
              deleteOrder={deleteOrder}
              updateArriveStatus={updateArriveStatus}
            />
          )}
        </div>
      ))}
      <div className="flex justify-center max-w-5xl min-w-custom mt-5">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={filteredData.length}
          pageSize={PageSize}
          onPageChange={(page) => setcurrentPage(page)}
        />
      </div>
    </div>
  ) : (
    <div className="-mt-12 w-5/6 max-w-xl ">
      <div className="py-5">
        <div className="border-t border-gray-200 my-10" />
        <div className="flex justify-center">
          <p className="text-lg">Order does exist</p>
        </div>
        <div className="border-t border-gray-200 my-10" />
      </div>
    </div>
  );
};

export default Ordermain;
