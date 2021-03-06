import React, { useEffect, useState } from "react";

import Dropselect from "./dropselect";
import Pagination from "./pagination";
import SellerOrderList from "./sellerorderlist";

let PageSize = 3;

const Manageorder = ({ sellerOrders, updatedSellerOrderStatus }) => {
  const [optionFilter, setOptionFilter] = useState("all");

  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();

  const [currentPage, setcurrentPage] = useState(1);

  useEffect(() => {
    if (sellerOrders) {
      const getFilteredData = Object.keys(sellerOrders)
        .reverse()
        .filter((id) => {
          return optionFilter === "all"
            ? sellerOrders[id].OrderStatus
            : sellerOrders[id].OrderStatus === optionFilter;
        });
      setFilteredData(getFilteredData);

      const currentTableData = () => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return getFilteredData.slice(firstPageIndex, lastPageIndex);
      };

      setData(currentTableData);
    }
  }, [optionFilter, currentPage, sellerOrders]);

  const filterManageOrder = (option) => {
    switch (option) {
      case "all":
        setOptionFilter("all");
        break;
      case option:
        setOptionFilter(option);
        break;
      default:
        break;
    }
  };

  return data ? (
    <div className="flex flex-col w-11/12 h-full">
      <div className="flex max-w-5xl min-w-custom justify-end ">
        <Dropselect filterManageOrder={filterManageOrder} />
      </div>
      {data.map((id) => (
        <div
          key={id}
          className="border-2 border-gray-100 mt-10 rounded-lg w-full h-72 max-w-5xl min-w-custom shadow-sm py-4 px-6"
        >
          <SellerOrderList
            key={id}
            id={id}
            sellerOrder={sellerOrders[id]}
            updatedSellerOrderStatus={updatedSellerOrderStatus}
          />
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
export default Manageorder;
