import React from "react";
import classDialogs from "./../Dialogs.module.css";
//import { NavLink } from "react-router-dom";

const Message = (props) => {
  return (
    <div className={classDialogs.dialog}>{props.message}</div>
  )
}

export default Message;
