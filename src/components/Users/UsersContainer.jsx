import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
	follow,
	unfollow,
	setCurrentPage,
	toggleFollowingProgress,
	getUsers,
} from "../../redux/usersReducer";
import Preloader from "../Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
	getUser,
	getPageSize,
	getTotalUsersCount,
	getCurrentPage,
	getIsFetching,
	getFollowingInProgress,
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
	};

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					pageSize={this.props.pageSize}
					totalUsersCount={this.props.totalUsersCount}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
					followingInProgress={this.props.followingInProgress}
				/>
			</>
		);
	}
}

// let mapStateToProps = (state) => {
// 	return {
// 		users: state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		currentPage: state.usersPage.currentPage,
// 		isFetching: state.usersPage.isFetching,
// 		followingInProgress: state.usersPage.followingInProgress,
// 	};
// };

let mapStateToProps = (state) => {
	return {
		users: getUser(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
	};
};

export default compose(
	connect(mapStateToProps, {
		follow,
		unfollow,
		setCurrentPage,
		toggleFollowingProgress,
		getUsers,
	}),
	withAuthRedirect
)(UsersContainer);
