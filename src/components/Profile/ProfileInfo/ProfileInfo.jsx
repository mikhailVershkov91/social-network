import React from "react";
import classProfile from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import userPhoto from "../../../assets/images/avatar.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
	if (!profile) {
		return <Preloader />;
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	};

	return (
		<div>
			<div className={classProfile.descriptionBlock}>
				<img src={profile.photos.large || userPhoto} className={classProfile.mainPhoto} />
				{isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
			</div>
		</div>
	);
};

export default ProfileInfo;
