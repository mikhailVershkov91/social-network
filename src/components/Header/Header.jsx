import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = (props) => {
	return (
		<header className={s.header}>
			<div className={s.container}>
				<div>
					<img className={s.logo} src={logo} alt="logo"></img>
				</div>
				<div className={s.headerNav}>
					{props.isAuth ? (
						<div>
							{props.login}{" "}
							<button className={s.button} onClick={props.logout}>
								Logout
							</button>
						</div>
					) : (
						<NavLink to={"/login"}>Login</NavLink>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
