const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
	users: [
	// 	{
	// 		id: 1,
	// 		photoURL: "https://imgur.com/I80W1Q0.png",
	// 		followed: false,
	// 		fullName: "Vova",
	// 		status: "GOAT",
	// 		location: { city: "Saint - Petersburg", country: "Russia" },
	// 	},
	// 	{
	// 		id: 2,
	// 		photoURL:
	// 			"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
	// 		followed: true,
	// 		fullName: "Kolya",
	// 		status: "Chill",
	// 		location: { city: "NY", country: "USA" },
	// 	},
	// 	{
	// 		id: 3,
	// 		photoURL:
	// 			"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
	// 		followed: false,
	// 		fullName: "Petya",
	// 		status: "Busy",
	// 		location: { city: "London", country: "UK" },
	// 	},
	],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: true };
					}
					return u;
				}),
			};

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: false };
					}
					return u;
				}),
			};

		case SET_USERS:
			return {
				...state,
				users: [...state.users, ...action.users],
			};

		default:
			return state;
	}
};

export const followAC = (userId) => ({
	type: FOLLOW,
	userId,
});

export const unfollowAC = (userId) => ({
	type: UNFOLLOW,
	userId,
});

export const setUsersAC = (users) => ({
	type: SET_USERS,
	users,
});

export default usersReducer;
