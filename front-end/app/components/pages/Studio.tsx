import { api } from '@/store/api/api';
import { videoApi } from '@/store/api/video.api';
import { FC } from 'react';
import Layout from '../layout/Layout';
import Loader from '../ui/loader/Loader';
import Catalog from './home/catalog/Catalog';

const Studio: FC = () => {
	const { data, isLoading } = api.useGetProfileQuery(null);
	const [removeVideo] = videoApi.useDeleteVideoMutation();

	const videos = data?.videos;

	return (
		<Layout title='MyTube studio'>
			<div>
				{isLoading ? (
					<Loader count={5} />
				) : videos?.length ? (
					<Catalog
						newVideos={videos}
						removeHandler={removeVideo}
						isUpdateLink
					/>
				) : (
					<p>Відео не знайдені</p>
				)}
			</div>
		</Layout>
	);
};

export default Studio;
