import Trending from '@/components/pages/trending/Trending';
import { VideoService } from '@/services/video.service';
import { IVideo } from '@/types/video.interface';
import { GetStaticProps, NextPage } from 'next';

const TrendingPage: NextPage<{ topVideos: IVideo[] }> = ({ topVideos }) => {
	return <Trending topVideos={topVideos} />;
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		// реалізовували через аксіос
		const { data: topVideos } = await VideoService.getMostPopular();

		return {
			props: {
				topVideos
			},
			revalidate: 60
		};
	} catch (error) {
		return {
			props: {
				topVideos: []
			}
		};
	}
};

export default TrendingPage;
