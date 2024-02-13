import React from "react";

export const Wrapper = ({ children, styles }) => {
  return <div className={`${styles || ""} w-[1480px] px-[40px] mx-auto`}>{children}</div>;
};
