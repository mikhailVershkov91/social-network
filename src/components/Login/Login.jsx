import React from "react";
import { reduxForm, Field } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import s from "./../common/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<Field
					placeholder={"Login"}
					component={Input}
					name={"email"}
					validate={[required]}
				/>
			</div>
			<div>
				<Field
					placeholder={"Password"}
					component={Input}
					name={"password"}
					type={"password"}
					validate={[required]}
				/>
			</div>
			<div>
				<Field type={"checkbox"} component={Input} name={"rememberMe"} />
				remember me
			</div>
			{error && <div className={s.formSummaryError}>{error}</div>}
			<div>
				<button>Login</button>
			</div>
		</form>
	);
};

const LoginReduxForm = reduxForm({
	form: "login",
})(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	};

	if (props.isAuth) {
		return <Redirect to={"/profile"} />;
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
