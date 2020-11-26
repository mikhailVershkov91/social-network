const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
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
	newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
	let stateCopy;

	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody: action.body
			};
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			return {
				...state,
				newMessageBody: '',
			  messages: [...state.messages, { id: 5, message: body }]
		  };
		default:
			return state;
	}
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	body: body,
});

export default dialogsReducer;
