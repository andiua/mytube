import { useAuth } from '@/hooks/useAuth';
import { api } from '@/store/api/api';
import cn from 'classnames';
import { FC } from 'react';
import { BsPersonPlusFill } from 'react-icons/bs';
import styles from './SubscribeButton.module.scss';

const SubscribeButton: FC<{
	channelIdForSubscribe: number;
}> = ({ channelIdForSubscribe }) => {
	const { user } = useAuth();
	const { data: profile } = api.useGetProfileQuery(null, {
		skip: !user
	});

	const [subscribe, { isLoading, data }] = api.useSubscribeToUserMutation();

	if (user?.id === channelIdForSubscribe) return null;

	const isSubscribed =
		profile?.subscriptions?.some(
			(sub) => sub.toUser.id === channelIdForSubscribe
		) || !!data;

	return (
		<button
			className={cn(styles.button, {
				[styles.subscribed]: isSubscribed
			})}
			onClick={() => subscribe(channelIdForSubscribe).unwrap()}
			disabled={isLoading}
		>
			<BsPersonPlusFill />
			{isSubscribed ? 'Підписаний' : 'Підписатись'}
		</button>
	);
};

export default SubscribeButton;
