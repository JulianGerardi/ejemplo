/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PopupInput = ({ className, text = "Target Amounts", frameClassName, text1 = "$500000" }) => {
  return (
    <div className={`popup-input ${className}`}>
      <div className="target-amounts">{text}</div>
      <div className={`element-wrapper ${frameClassName}`}>
        <div className="element">{text1}</div>
      </div>
    </div>
  );
};

PopupInput.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
