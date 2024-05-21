import React from "react";

const Wrapper = ({ children, styles }) => {
  return <div className={`${styles || ""} w-[1480px] px-[40px] mx-auto`}>{children}</div>;
};

export default Wrapper;
