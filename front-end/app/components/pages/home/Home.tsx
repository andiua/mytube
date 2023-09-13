import { FC } from 'react';
import { IHome } from './home.interface';
import Layout from '@/components/layout/Layout';
import Discover from './discover/Discover';
import Catalog from './catalog/Catalog';

const Home: FC = () => {
	return <Layout title='MyTube | ваше відео для нашого сайту xD'>
		<Discover/>
		<Catalog />
	</Layout>;
};

export default Home;
