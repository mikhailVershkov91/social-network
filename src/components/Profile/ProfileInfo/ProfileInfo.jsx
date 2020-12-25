import React from "react";
import classProfile from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
	if (!profile) {
		return <Preloader />;
	}

	return (
		<div>
			<div className={classProfile.descriptionBlock}>
				<img src={profile.photos.large} />
				<ProfileStatusWithHooks
					status={status}
					updateStatus={updateStatus}
				/>
			</div>
		</div>
	);
};

export default ProfileInfo;
