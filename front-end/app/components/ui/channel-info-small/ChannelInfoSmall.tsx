import { IUser } from '@/types/user.interface';
import { formatNumberTok } from '@/utils/format-number-to-k';
import { FC } from 'react';
import UserAvatar from '../user-avatar/UserAvatar';
import styles from './ChannelInfoSmall.module.scss';

const ChannelInfoSmall: FC<{ channel: IUser; message?: string }> = ({
	channel,
	message
}) => {
	return (
		<div className={styles.profile_info}>
			{channel.avatarPath && <UserAvatar user={channel} />}

			<div>
				<div className={styles.name}>{channel.name}</div>
				<div className={styles.subscribers_count}>
					{message || formatNumberTok(channel.subscriberCount) + ' підписників'}
				</div>
			</div>
		</div>
	);
};

export default ChannelInfoSmall;
