import LargeVideoItem from '@/components/ui/video-item/LargeVideoItem';
import { IVideo } from '@/types/video.interface';
import { FC } from 'react';
import styles from './Discover.module.scss';

const Discover: FC<{ topVideo: IVideo; randomVideo: IVideo }> = ({
	randomVideo,
	topVideo
}) => {
	return (
		<div className={styles.discover}>
			<div className={styles.top_video}>
				<LargeVideoItem video={topVideo} />
			</div>

			<div className={styles.random_video}>
				<LargeVideoItem video={randomVideo} />
			</div>
		</div>
	);
};

export default Discover;
