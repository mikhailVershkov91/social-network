import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: "Hi, how are you?", likeCounts: 5 },
				{ id: 2, message: "Would you like to dance?", likeCounts: 12 },
			],
			newPostText: "I'll get it",
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: "Misha" },
				{ id: 2, name: "Masha" },
				{ id: 3, name: "Dasha" },
				{ id: 4, name: "Sasha" },
			],
			messages: [
				{ id: 1, message: "Hi" },
				{ id: 2, message: "How are you?" },
				{ id: 3, message: "Hello" },
				{ id: 4, message: "Yo" },
			],
			newMessageBody: "",
		},
	},

	_callSubscriber() {
		console.log("Changed");
	},

	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
	}
};

export default store;

window.store = store;
