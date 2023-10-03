import Home from '@/components/pages/home/Home';
import { IHome } from '@/components/pages/home/home.interface';
import { VideoService } from '@/services/video.service';
import { IVideo } from '@/types/video.interface';
import { GetStaticProps, NextPage } from 'next';

import shuffle from 'lodash/shuffle';

const HomePage: NextPage<IHome> = (props) => {
	return <Home {...props} />;
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		// реалізовували через аксіос
		const { data: newVideos } = await VideoService.getAll();
		const { data: topVideos } = await VideoService.getMostPopular();
		return {
			props: {
				newVideos: newVideos,
				topVideo: topVideos[0],
				randomVideo: shuffle(
					newVideos.filter((v) => v.id !== topVideos[0].id)
				)[0]
			} as IHome
		};
	} catch (error) {
		return {
			props: {
				newVideos: [],
				topVideo: {} as IVideo,
				randomVideo: {} as IVideo
			} as IHome
		};
	}
};

export default HomePage;
