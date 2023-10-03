import Layout from '@/components/layout/Layout';
import { IVideo } from '@/types/video.interface';
import { FC } from 'react';
import Catalog from '../home/catalog/Catalog';

const Trending: FC<{
	topVideos: IVideo[];
}> = ({ topVideos }) => {
	return (
		<Layout title='Тренди'>
			<Catalog newVideos={topVideos} />
		</Layout>
	);
};

export default Trending;
