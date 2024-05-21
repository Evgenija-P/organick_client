"use client";

import PropTypes from "prop-types";

const buttonsStyle = {
  transparent: "",
  main: "w-[220px] h-[80px] px-3 py-7 text-white text-xl font-bold bg-main rounded-2xl",
  yellow: "",
  white: "",
};

const Button = ({ children, style, btnType, icon, clickFn, btnClass, disabled, ...restProps }) => {
  const handleClick = () => (clickFn ? clickFn() : null);
  const additionalStyle = btnClass || "";

  const currentStyle = `${buttonsStyle[style]} ${additionalStyle}`;

  return (
    <button
      type={btnType || "button"}
      className={currentStyle}
      onClick={handleClick}
      {...restProps}
      disabled={disabled}
    >
      {children}
      {icon}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOf(["transparent", "main", "yellow", "white"]).isRequired,
  btnType: PropTypes.string,
  icon: PropTypes.element,
  clickFn: PropTypes.func,
  btnClass: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
