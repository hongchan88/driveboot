import React from "react";

const Globalheader = ({ authProvider }) => {
  return (
    <section class="flex font-mono justify-between px-10 py-10 ">
      <div>
        <a href="/">
          <p class="font-bold text-white text-xl">Boot Drive Thru</p>
        </a>
      </div>
      <div>
        <a href="https://github.com/hongchan88/driveboot">
          <img
            src="https://res.cloudinary.com/dwbsxpk82/image/upload/v1632729209/default/qzencuuerwlho1iudven.png"
            alt=""
          />
        </a>
      </div>
    </section>
  );
};
export default Globalheader;
