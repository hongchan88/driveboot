import React, { useState } from "react";
import Shops from "../shops/shops";

const Contents = ({ shops }) => {
  return (
    <div>
      <Shops shops={shops} />
    </div>
  );
};

export default Contents;
