import { useAuth } from '@/hooks/useAuth';
import React from 'react';
import styles from './IconsRight.module.scss';
import ProfileMenu from '../profile-menu/ProfileMenu';
import UploadVideo from '../upload-video/UploadVideo';
import AuthForm from '../auth-form/AuthForm';

const IconsRight = () => {
	const { user } = useAuth();

	return (
		<div className={styles.icons}>
			{user ? (
				<>
					<ProfileMenu />
					<UploadVideo />
				</>
			) : (
				<AuthForm />
			)}
		</div>
	);
};

export default IconsRight;
