import * as axios from "axios";

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers: {
		"API-KEY": "9d0fbf15-9405-4c11-b976-8a14a652cc8f",
	},
});

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => {
				return response.data;
			});
	},

	follow(userId) {
		return instance.post(`follow/${userId}`);
	},

	unfollow(userId) {
		return instance.delete(`follow/${userId}`);
	},

	getProfile(userId) {
		return instance.get(`profile/` + userId);
	},
};

export const authAPI = {
	me() {
		return instance.get(`auth/me`);
	},
};
