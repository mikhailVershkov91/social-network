const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
	let stateCopy;

	switch (action.type) {
		case SEND_MESSAGE:
			let body = action.newMessageBody;
			return {
				...state,
				messages: [...state.messages, { id: 5, message: body }],
			};
		default:
			return state;
	}
};

export const sendMessageCreator = (newMessageBody) => ({
	type: SEND_MESSAGE,
	newMessageBody,
});

export default dialogsReducer;
