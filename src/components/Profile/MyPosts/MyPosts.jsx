import React from "react";
import classMyPosts from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator } from "../../../redux/profileReducer";
import { reduxForm, Field } from "redux-form";
import {
	required,
	maxLengthCreator,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {
	let postsElements = props.posts.map((p) => (
		<Post message={p.message} likeCounts={p.likeCounts} />
	));

	let newPostElement = React.createRef();

	let onAddPost = (values) => {
		props.addPost(values.newPostText);
	};

	return (
		<div className={classMyPosts.postsBlock}>
			<h3>My posts</h3>
			<AddNewPostFormRedux onSubmit={onAddPost} />
			<div className={classMyPosts.posts}>{postsElements}</div>
		</div>
	);
};

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					component={Textarea}
					name="newPostText"
					placeholder="New post"
					validate={[required, maxLength10]}
				/>
			</div>
			<div>
				<button>Add post</button>
			</div>
		</form>
	);
};

const AddNewPostFormRedux = reduxForm({
	form: "profileAddNewPostForm",
})(AddNewPostForm);

export default MyPosts;
