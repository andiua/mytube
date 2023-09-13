import { IVideo } from '@/types/video.interface';
import { axiosClassic } from 'api/axios';

const VIDEO = 'video';

export const VideoService = {
	async getAll() {
		return axiosClassic.get<IVideo[]>(`/${VIDEO}/getAll`);
	},
	async getMostPopular() {
		return axiosClassic.get<IVideo>(`/${VIDEO}/most-popular`);
	}
};
