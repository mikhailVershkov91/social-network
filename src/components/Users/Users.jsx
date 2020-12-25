import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/avatar.png";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({
	currentPage,
	totalUsersCount,
	pageSize,
	onPageChanged,
	users,
	...props
}) => {
	return (
		<div>
			<Paginator
				currentPage={currentPage}
				onPageChanged={onPageChanged}
				totalItemsCount={totalUsersCount}
				pageSize={pageSize}
			/>
			<div>
				{users.map((u) => (
					<User
						user={u}
						followingInProgress={props.followingInProgress}
						unfollow={props.unfollow}
						follow={props.follow}
						key={u.id}
					/>
				))}
			</div>
		</div>
	);
};

export default Users;
