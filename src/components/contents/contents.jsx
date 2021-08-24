import React, { useEffect, useState } from "react";

import Shops from "../shops/shops";

const Contents = ({ shops }) => {
  return (
    <div class="w-full">
      <Shops shops={shops} />
    </div>
  );
};

export default Contents;
