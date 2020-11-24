import React from "react";
import classHeader from './Header.module.css';

const Header = () => {
  return (
    <header className={classHeader.header}>
				<img
					src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"
					alt="logo"
				></img>
			</header>
  )
}

export default Header;