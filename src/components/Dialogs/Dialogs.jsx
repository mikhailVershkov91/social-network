import React from "react";
import classDialogs from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
	updateNewMessageBodyCreator,
	sendMessageCreator,
} from "../../redux/dialogsReducer";
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";

const Dialogs = (props) => {
	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map((d) => (
		<DialogItem name={d.name} key={d.id} id={d.id} />
	));

	let messagesElements = state.messages.map((m) => (
		<Message message={m.message} key={m.id} />
	));

	let newMessageBody = state.newMessageBody;

	let addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody);
	};

	if (!props.isAuth) {
		return <Redirect to={"/login"} />;
	}

	return (
		<div className={classDialogs.dialogs}>
			<div className={classDialogs.dialogsItem}>{dialogsElements}</div>
			<div className={classDialogs.messages}>
				<div>{messagesElements}</div>
			</div>
			<AddMessageFormRedux onSubmit={addNewMessage} />
		</div>
	);
};

const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					component="textarea"
					name="newMessageBody"
					placeholder="Enter your message"
				/>
			</div>
			<div>
				<button>Send</button>
			</div>
		</form>
	);
};

const AddMessageFormRedux = reduxForm({
	form: "dialogAddMessageForm",
})(AddMessageForm);

export default Dialogs;
