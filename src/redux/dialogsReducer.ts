const SEND_MESSAGE = "SEND-MESSAGE";

type DialogType = {
	id: number;
	name: string;
};

type MessageType = {
	id: number;
	message: string;
};

let initialState = {
	dialogs: [
		{ id: 1, name: "Misha" },
		{ id: 2, name: "Masha" },
		{ id: 3, name: "Dasha" },
		{ id: 4, name: "Sasha" },
	] as Array<DialogType>,
	messages: [
		{ id: 1, message: "Hi" },
		{ id: 2, message: "How are you?" },
		{ id: 3, message: "Hello" },
		{ id: 4, message: "Yo" },
	] as Array<MessageType>,
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (
	state = initialState,
	action: any
): InitialStateType => {
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

type SendMessageCreatorActionType = {
	type: typeof SEND_MESSAGE;
	newMessageBody: string;
};

export const sendMessageCreator = (
	newMessageBody: string
): SendMessageCreatorActionType => ({
	type: SEND_MESSAGE,
	newMessageBody,
});

export default dialogsReducer;
