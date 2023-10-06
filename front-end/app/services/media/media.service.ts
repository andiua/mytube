import { axiosClassic } from 'api/axios';
import { IMediaResponse } from './media.interface';

export const MediaService = {
	async upload(
		media: FormData,
		token: string,
		folder?: string,
		setValue?: (val: number) => void //прогрес бар
	) {
		return axiosClassic.post<IMediaResponse>('/media', media, {
			params: { folder },
			headers: {
				'Content-Type': 'multipart/form-data',
				Authorization: 'Bearer ' + token
			},
			onUploadProgress: (progressEvent) => {
				if (setValue && progressEvent.total) {
					const progress = (progressEvent.loaded / progressEvent.total) * 100;
					setValue(Math.ceil(progress));
				}
			}
		});
	}
};
