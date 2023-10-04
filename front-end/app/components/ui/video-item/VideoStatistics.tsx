import { formatNumberTok } from '@/utils/format-number-to-k';
import dayjs from 'dayjs';
import lang from 'dayjs/locale/uk';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FC } from 'react';
import styles from './VideoItem.module.scss';

dayjs.extend(relativeTime);
dayjs.locale(lang);

interface IVideoStatistics {
	views: number;
	createAt?: string;
}
const VideoStaticstics: FC<IVideoStatistics> = ({ views, createAt }) => {
	return (
		<div className={styles.number_info}>
			<div className={styles.views}>{formatNumberTok(views)} views</div>
			{!!createAt && (
				<>
					<div className='mx-2'>•</div>
					<div className={styles.date}>
						{dayjs(new Date(createAt)).fromNow()}
					</div>
				</>
			)}
		</div>
	);
};

export default VideoStaticstics;
