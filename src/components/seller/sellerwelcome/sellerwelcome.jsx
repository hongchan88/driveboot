import React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import GoogleButton from "react-google-button";

const SellerWelcome = ({ user }) => {
  return (
    <>
      {user ? (
        <div>
          <h1>Boot Drive Thru</h1>
          <p>1. Order your items online</p>
          <p>
            2. Wait for a confirmation message from the shop ( time/ pick up
            location)
          </p>
          <p>3. When you're arrived. Tap "I am arrived at pick up point :)" </p>
          <p>
            4. Just wait for a few mins while shop staff will get your goods and
            locate your car in the pick up point ( give them a wave when they
            can't find you :( )
          </p>
          <p>
            5. Verify order number and process payment if not paid when ordering
          </p>
          <p>6. Products will be placed in the boot of your car!</p>
          <p>7. Good to drive Thru ! </p>
        </div>
      ) : (
        <h1>Please Sign in</h1>
      )}
    </>
  );
};

export default SellerWelcome;
