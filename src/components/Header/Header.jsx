import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
	return (
		<header className={s.header}>
			<img
				src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"
				alt="logo"
			></img>
			<div className={s.loginBlock}>
				{props.isAuth ? (
					<div>
						{props.login} <button onClick={props.logout}>Logout</button>
					</div>
				) : (
					<NavLink to={"/login"}>Login</NavLink>
				)}
			</div>
		</header>
	);
};

export default Header;
