import cogoToast from "cogo-toast";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SellerWelcome = ({ user }) => {
  useEffect(() => {
    if (!user) {
      cogoToast.error("Please log in");
    }
  });

  return (
    <>
      <div className="px-10">
        <div className="w-full flex justify-center">
          <img
            className="w-96 h-80 rounded-xl"
            src="https://res.cloudinary.com/dwbsxpk82/image/upload/v1632721040/default/izufi56srgbfi3kzsizy.png"
            alt=""
          />
        </div>
        <h1 className="font-bold text-2xl">Boot Drive Thru Seller Account</h1>
        <div className="group text-xl space-y-3 mt-5 font-sans w-full">
          <p>
            1. Register your shop. here->
            <Link to="/myshop">
              <span className="font-bold"> My shop</span>
            </Link>
            ✨
          </p>
          <p>
            2. Fill out the information of your shop ( shop info, Pick up
            location , trading hour). 👏👏
          </p>
          <p>3. Add items that you are selling . 🛀</p>
          <div>
            4. Manage your orders here ->
            <Link to="/manageorder">
              <span className="font-bold"> Manage order</span>
            </Link>
            <ul className="mt-5 space-y-5 group text-lg ml-5">
              <li>
                <strong>"Order placed":</strong> Customer placed order
              </li>
              <li>
                <strong>"Processing":</strong> Confirming the order / price /
                pick up time to customer.
              </li>
              <li>
                <strong>"Ready to Pick up":</strong> Confirming to customer that
                the items are ready to pick up at the location you assigned.
              </li>
            </ul>
          </div>
          <p>
            5. When customer is arrived they can tap to notify that they are
            arrived. Once they tap it , "Customer not yet arrived" change to
            "Arrived at the pick up point"
          </p>
          <p>
            6. Get items ready and locate customer's car at pick up point with
            given plate number on order detail
          </p>
          <p>7. Verify order number and process payment.👀</p>
          <p>8. Place items in the boot of the car! 🚗</p>
          <p>9. Chang status to "Picked up" ✔ </p>
        </div>
      </div>
    </>
  );
};

export default SellerWelcome;
