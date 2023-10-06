import { videoApi } from '@/store/api/video.api';
import { IVideoDto } from '@/types/video.interface';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUploadVideoForm } from './upload-video-form';
import { IMediaResponse } from '@/services/media/media.interface';

const useUploadVideoForm = ({
	handleCloseModal,
	videoId
}: IUploadVideoForm) => {
	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		watch,
		setValue,
		reset
	} = useForm<IVideoDto>({
		mode: 'onChange'
	});

	const [updateVideo, { isSuccess }] = videoApi.useUpdateVideoMutation();

	const onSubmit: SubmitHandler<IVideoDto> = (data) => {
		updateVideo({ ...data, id: videoId })
			.unwrap()
			.then(() => {
				handleCloseModal();
				reset();
			});
	};

	const videoPath = watch('videoPath');
	const thumbnailPath = watch('thumbnailPath');
	const [videoFileName, setVideoFileName] = useState('');

	const handleUploadVideo = (value: IMediaResponse) => {
		setValue('videoPath', value.url);
		setValue('name', value.name);
		setVideoFileName(value.name);
	};

	const [isChosen, setIsChosen] = useState(false);

	const [percent, setPercent] = useState(0);
	const [isUploaded, setIsUploaded] = useState(false);
	const setProgressPercentage = (val: number) => {
		setPercent(val);
		if (val === 100) setIsUploaded(true);
	};

	return {
		form: {
			register,
			errors,
			control,
			handleSubmit,
			onSubmit
		},
		status: {
			isSuccess,
			isChosen,
			setIsChosen,
			percent,
			isUploaded,
			setProgressPercentage
		},
		media: {
			videoPath,
			thumbnailPath,
			videoFileName,
			handleUploadVideo
		}
	};
};

export default useUploadVideoForm;
