import { FC } from 'react';

import { IUser } from '@/types/user.interface';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import styles from './UserAvatar.module.scss';

const UserAvatar: FC<{ user: IUser; isWhite?: boolean }> = ({
	isWhite,
	user
}) => {
	return (
		<Link href={`/c/${user.id}`}>
			<span
				className={cn(styles.avatar, {
					[styles.white]: isWhite
				})}
			>
				<Image
					width={45}
					height={45}
					alt={user.name}
					src={user.avatarPath || ''}
				/>
				{user.isVerified && (
					<span className={styles.isVerified}>
						<IoIosCheckmarkCircle />
					</span>
				)}
			</span>
		</Link>
	);
};

export default UserAvatar;
