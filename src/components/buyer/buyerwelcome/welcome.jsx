import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div className="px-10">
        <div className="w-full flex justify-center">
          <img
            className="w-96 h-80 rounded-xl "
            src="https://res.cloudinary.com/dwbsxpk82/image/upload/v1632721040/default/izufi56srgbfi3kzsizy.png"
            alt=""
          />
        </div>
        <h1 className="font-bold text-2xl">Boot Drive Thru</h1>
        <div className="group text-xl space-y-3 mt-5 font-sans w-full">
          <p>
            1. Choose shop and order items on
            <Link to="/shop">
              <span className="font-bold"> Shop menu</span>
            </Link>
            ✨
          </p>
          <p>
            2. Shop will confirm your order and update the status in{" "}
            <Link to="/order">
              <span className="font-bold"> Order History</span>
            </Link>
            . 👏👏
          </p>
          <p>2. Wait for a "Ready to pick up" status . 🛀</p>
          <p>
            3. Once your order is "Ready to pick up" status. Be at the assigned
            pick up point at the time you ordered. ✔
          </p>
          <p>4. When you're arrived. Tap "I am arrived at pick up point 😍"</p>
          <p>
            5. Just wait for a few mins while shop staff will get your goods and
            locate your car in the pick up point ( give them a wave when they
            can't find you 🙌🙌 )
          </p>
          <p>6. Verify order number and process payment.👀</p>
          <p>7. Products will be placed in the boot of your car! 🚗</p>
          <p>8. Good to drive Thru !🎉🎉 </p>
        </div>
      </div>
    </>
  );
};

export default Welcome;
