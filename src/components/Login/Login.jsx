import React from "react";
import { reduxForm, Field } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input, createField } from "../common/FormsControls/FormsControls";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import s from "./../common/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
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
			{captchaUrl && <img src={captchaUrl} />}
			{captchaUrl &&
				createField("Symbols from image", "captcha", [required], Input, {})}
			
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
		props.login(
			formData.email,
			formData.password,
			formData.rememberMe,
			formData.captcha
		);
	};

	if (props.isAuth) {
		return <Redirect to={"/profile"} />;
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
