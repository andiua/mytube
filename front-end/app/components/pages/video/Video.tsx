import Layout from '@/components/layout/Layout';
import { videoApi } from '@/store/api/video.api';
import { IVideo } from '@/types/video.interface';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './Video.module.scss';
import Comments from './comments/Comments';
import VideoPlayer from './video-player/VideoPlayer';

const Video: FC = () => {
	const { query } = useRouter();

	const { data: video = {} as IVideo } = videoApi.useGetVideoByIdQuery(
		Number(query.id),
		{
			skip: !query?.id
		}
	);
	return (
		<Layout title={video.name}>
			<div className={styles.layout}>
				<VideoPlayer videoPath={video.videoPath} />
				<Comments comments={video.comments || []} videoId={video.id} />
			</div>
			<div className={cn(styles.layout, 'mt-7')}>
				{/* videDetail here */}
				{/* <div></div> */}
			</div>
		</Layout>
	);
};

export default Video;
