import React from "react";
import { Link } from "react-router-dom";

const Myshop = ({ shops, user, addShop }) => {
  console.log(shops);
  console.log(user.uid);
  return (
    <div class="flex flex-col">
      <Link to={`/myshop/${user.uid}`}>
        <button onClick={() => addShop(user.uid)}>Create your own shop</button>
      </Link>
    </div>
  );
};

export default Myshop;
