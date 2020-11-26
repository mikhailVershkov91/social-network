import React from "react";
import classDialogs from "./Dialogs.module.css";
//import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
	updateNewMessageBodyCreator,
	sendMessageCreator,
} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map((d) => (
		<DialogItem name={d.name} key={d.id} id={d.id} />
	));

	let messagesElements = state.messages.map((m) => (
		<Message message={m.message} key={m.id}/>
	));

	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = () => {
		props.sendMessage();
	};

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	};

	return (
		<div className={classDialogs.dialogs}>
			<div className={classDialogs.dialogsItem}>{dialogsElements}</div>
			<div className={classDialogs.messages}>
				<div>{messagesElements}</div>
				<div>
					<div>
						<textarea
							onChange={onNewMessageChange}
							value={newMessageBody}
							placeholder="Enter your message"
						></textarea>
					</div>
					<div>
						<button onClick={onSendMessageClick}>Send</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
