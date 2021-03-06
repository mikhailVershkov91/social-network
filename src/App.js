import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/Preloader/Preloader";

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />;
		}

		return (
			<>
				<HeaderContainer />
				<div className="mainPage">
				<Navbar />
					<div className="mainPageContainer">
						<div className="container">
							<Route path="/login" render={() => <LoginPage />} />
							<Route
								path="/profile/:userId?"
								render={() => <ProfileContainer />}
							/>
							<Route path="/dialogs" render={() => <DialogsContainer />} />
							<Route path="/users" render={() => <UsersContainer />} />
							<Route path="/news" component={News} />
							<Route path="/music" component={Music} />
							<Route path="/settings" component={Settings} />
						</div>
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
