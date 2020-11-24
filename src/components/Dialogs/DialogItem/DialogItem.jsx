import React from "react";
import classDialogs from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
	return (
		<div className={`${classDialogs.dialog} ${classDialogs.active}`}>
			<NavLink to={"/dialogs/" + props.id }>{props.name}</NavLink>
		</div>
	);
};


export default DialogItem;
