/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Logout } from "../../icons/Logout";
import { Frame } from "../Frame";
import "./style.css";

export const LogoutWrapper = ({ className, frameIcon = <Logout className="logout-3" /> }) => {
  return (
    <div className={`logout-wrapper ${className}`}>
      <Frame className="icon" icon={frameIcon} />
      <div className="text-wrapper">Logout</div>
    </div>
  );
};
