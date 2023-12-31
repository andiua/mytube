import Heading from '@/components/ui/heading/Heading';
import VideoItem from '@/components/ui/video-item/VideoItem';
import { IVideo } from '@/types/video.interface';
import { FC } from 'react';
import styles from './Catalog.module.scss';

const Catalog: FC<{
	newVideos: IVideo[];
	removeHandler?: (videoId: number) => void;
	isUpdateLink?: boolean;
}> = ({ isUpdateLink, newVideos, removeHandler }) => {
	return (
		<div className={styles.recommended}>
			<div className={styles.top_block}>
				<Heading title={removeHandler ? 'Моє відео' : 'Рекомендації'} />
			</div>

			<div className={styles.catalog}>
				{newVideos.map((video) => (
					<VideoItem
						item={video}
						key={video.id}
						removeHandler={removeHandler}
						isUpdateLink={isUpdateLink}
					/>
				))}
			</div>
		</div>
	);
};

export default Catalog;
