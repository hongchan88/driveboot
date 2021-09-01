import React from "react";
import { Link } from "react-router-dom";

const Myshop = ({ shop, user, addShop }) => {
  console.log(shop);

  return (
    <div class="flex flex-col">
      <Link to={`/myshop/${user.uid}`}>
        {shop ? (
          <h1>edit your shop</h1>
        ) : (
          <button onClick={() => addShop(user.uid)}>
            Create your own shop
          </button>
        )}
      </Link>
    </div>
  );
};

export default Myshop;
