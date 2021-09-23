import React, { useEffect, useRef, useState } from "react";
import cogoToast from "cogo-toast";
import Popup from "reactjs-popup";

const SellerSearchList = ({ product, deleteProduct, filterOn }) => {
  // const [nonFiltered, setNonFiltered] = useState(false);

  // useEffect(() => {
  //   if (product.length == 0) {
  //     setNonFiltered(true);
  //   }
  // });

  console.log(filterOn, "filtered on");
  const deleteProductOn = (e) => {
    cogoToast.success("Successfully deleted your product!");

    deleteProduct(product.id, e, filterOn);
  };
  return (
    <div class="flex justify-between py-2 px-2">
      <div class="flex">
        <div>
          <Popup
            trigger={
              <img
                class="inline object-cover w-16 h-16 mr-2 cursor-pointer hover:opacity-75 "
                src={product?.productImg}
                alt="Product image"
              />
            }
            modal
          >
            <div className="flex justify-center">
              <img class="" src={product?.productImg} alt="Product image" />
            </div>
          </Popup>
        </div>
        <div className="flex flex-col">
          <p class="text-2xl text-gray-700 dark:text-gray-100 ">
            {product?.name}
          </p>
          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {product?.brand} {product?.size}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <p className="font-bold">${product?.price}</p>
        <button
          className="ml-10 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 rounded-lg"
          onClick={deleteProductOn}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SellerSearchList;
