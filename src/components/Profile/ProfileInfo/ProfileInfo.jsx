import React from "react";
import classProfile from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />;
	}

	return (
		<div>
			{/* <img
				src="https://png.pngtree.com/thumb_back/fw800/back_our/20190617/ourmid/pngtree-blue-technology-background-banner-image_125518.jpg"
				alt="Background"
			></img> */}
			<div className={classProfile.descriptionBlock}>
				<img src={props.profile.photos.large} />
				<ProfileStatus
					status={props.status}
					updateStatus={props.updateStatus}
				/>
			</div>
		</div>
	);
};

export default ProfileInfo;
