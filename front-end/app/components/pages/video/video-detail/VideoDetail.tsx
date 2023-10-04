import ChannelInfoSmall from '@/components/ui/channel-info-small/ChannelInfoSmall';
import SubscribeButton from '@/components/ui/subscribe-button/SubscribeButton';
import { videoApi } from '@/store/api/video.api';
import { IUser } from '@/types/user.interface';
import { IVideo } from '@/types/video.interface';
import { formatNumberTok } from '@/utils/format-number-to-k';
import dayjs from 'dayjs';
import { FC } from 'react';
import { HiCalendar } from 'react-icons/hi';
import { RiEyeFill, RiHeart2Fill } from 'react-icons/ri';
import styles from './VideoDetail.module.scss';

interface IVideoDetail {
	video: IVideo;
	channel: IUser;
}

const VideoDetail: FC<IVideoDetail> = ({ channel, video }) => {
	const [updateLike, { isLoading: isLoadingLikes }] =
		videoApi.useUpdateLikesMutation();

	return (
		<div className={styles.detail}>
			<div>
				<ChannelInfoSmall channel={channel} />
				<h1>{video.name}</h1>
				<article className={styles.article}>{video.description}</article>
			</div>
			<div className='pt-2'>
				<div className={styles.wrapper_button}>
					{video.user?.id && (
						<SubscribeButton channelIdForSubscribe={video.user?.id} />
					)}
					<button
						className={styles.likeButton}
						disabled={isLoadingLikes}
						onClick={() => updateLike(video.id)}
					>
						<RiHeart2Fill />
						Вподобайка
					</button>
				</div>

				<div className={styles.number_info}>
					<div>
						<RiEyeFill />
						<span>{formatNumberTok(video.views)} переглядів</span>
					</div>
					<div>
						<RiHeart2Fill />
						<span>{formatNumberTok(video.likes)} вподобайок</span>
					</div>
					<div>
						<HiCalendar />
						<span>{dayjs(new Date(video.createdAt)).fromNow()}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoDetail;
