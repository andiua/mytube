import Layout from '@/components/layout/Layout';
import { FC } from 'react';
import Catalog from './catalog/Catalog';
import Discover from './discover/Discover';
import { IHome } from './home.interface';

const Home: FC<IHome> = ({ newVideos, randomVideo, topVideo }) => {
	return (
		<Layout title='MyTube | ваше відео для нашого сайту xD'>
			<Discover randomVideo={randomVideo} topVideo={topVideo} />
			<Catalog />
		</Layout>
	);
};

export default Home;
