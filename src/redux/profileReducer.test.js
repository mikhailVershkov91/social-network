import React from "react";
import profileReducer, { addPostActionCreator } from "./profileReducer";

it("New post should be added", () => {
	//1. test data
	let action = addPostActionCreator("I'm a super hero");
	let state = {
		posts: [
			{ id: 1, message: "Hi, how are you?", likeCounts: 5 },
			{ id: 2, message: "Would you like to dance?", likeCounts: 12 },
		],
	};
	//2. action
	let newState = profileReducer(state, action);
	//3. expectation
	expect(newState.posts.length).toBe(3);
	expect(newState.posts[2].message).toBe("I'm a super hero");
});
