import React from "react";
import classProfile from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import userPhoto from "../../../assets/images/avatar.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
	profile,
	status,
	updateStatus,
	isOwner,
	savePhoto,
	saveProfile,
}) => {
	let [editMode, setEditMode] = useState(false);

	if (!profile) {
		return <Preloader />;
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	};

	const onSubmit = (formData) => {
		saveProfile(formData).then(() => {
			setEditMode(false);
		});
	};

	const goToEditMode = () => {
		setEditMode(true);
	};

	return (
		<div className={classProfile.descriptionBlock}>
			<div className={classProfile.photoSection}>
				<img
					src={profile.photos.large || userPhoto}
					className={classProfile.mainPhoto}
				/>
				{isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
				{isOwner && (
					<button className={classProfile.button} onClick={goToEditMode}>
						Edit
					</button>
				)}
			</div>

			<div className={classProfile.info}>
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

				{editMode ? (
					<ProfileDataForm
						initialValues={profile}
						profile={profile}
						onSubmit={onSubmit}
					/>
				) : (
					<ProfileData
						isOwner={isOwner}
						profile={profile}
					/>
				)}
			</div>
		</div>
	);
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
	return (
		<div className={classProfile.data}>
			<div>
				<b>Full name:</b> {profile.fullName}
			</div>
			<div>
				<b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
			</div>
			{profile.lookingForAJob && (
				<div>
					<b>My professional skills:</b> {profile.lookingForAJobDescription}
				</div>
			)}
			<div>
				<b>About me:</b> {profile.aboutMe}
			</div>

			<div>
				<b>Contacts:</b>{" "}
				{Object.keys(profile.contacts).map((key) => {
					return (
						<Contact
							key={key}
							contactTitle={key}
							contactValue={profile.contacts[key]}
						/>
					);
				})}
			</div>
		</div>
	);
};

const Contact = ({ contactTitle, contactValue }) => {
	return (
		<div className={classProfile.contact}>
			<b>{contactTitle}:</b>
			{contactValue}
		</div>
	);
};

export default ProfileInfo;
