import Layout from '@/components/layout/Layout';
import TogglePublic from '@/components/layout/header/upload-video/upload-video-form/toggle-public/TogglePublic';
import VideoInformation from '@/components/layout/header/upload-video/upload-video-form/video-information/VideoInformation';
import Field from '@/components/ui/field/Field';
import Loader from '@/components/ui/loader/Loader';
import Textarea from '@/components/ui/textarea/Textarea';
import UploadField from '@/components/ui/upload-field/UploadField';
import { IMediaResponse } from '@/services/media/media.interface';
import { videoApi } from '@/store/api/video.api';
import { IVideoDto } from '@/types/video.interface';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toastr } from 'react-redux-toastr';
import Button from '@/components/ui/button/Button';

const VideoEdit: FC = () => {
	const { query } = useRouter();
	const videoId = Number(query.id);

	const { data, isLoading } = videoApi.useGetVideoByIdQuery(videoId, {
		skip: !videoId
	});

	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		watch,
		setValue
	} = useForm<IVideoDto>({
		mode: 'onChange'
	});

	useEffect(() => {
		if (!watch('name') && data) {
			setValue('name', data.name);
			setValue('description', data.description);
			setValue('videoPath', data.videoPath);
			setValue('thumbnailPath', data.thumbnailPath);
			setValue('isPublic', data.isPublic);
		}
	}, [data]);

	const [updateVideo, { isLoading: isUpdateLoading }] =
		videoApi.useUpdateVideoMutation();

	const { push } = useRouter();

	const onSubmit: SubmitHandler<IVideoDto> = (data) => {
		updateVideo({ ...data, id: videoId })
			.unwrap()
			.then(() => {
				toastr.success('Статус', 'Відео оновлено');
				push('/studio');
			});
	};

	return (
		<Layout title='Редагування відео'>
			<div>
				{isLoading ? (
					<Loader count={5} />
				) : (
					<form className='flex flex-wrap' onSubmit={handleSubmit(onSubmit)}>
						<div className='w-7/12 pr-6 pt-8'>
							<Field
								{...register('name', {
									required: "Назва обов'язково"
								})}
								placeholder='Назва'
								error={errors.name}
							/>
							<Textarea
								{...register('description', {
									required: "Опис обов'язково"
								})}
								placeholder='опис'
								error={errors.description}
							/>
							<div className='mt-8'>
								<Controller
									control={control}
									name='isPublic'
									render={({ field: { onChange } }) => (
										<UploadField
											folder='thumbnail'
											onChange={(value: IMediaResponse) => {
												onChange(value.url);
											}}
										/>
									)}
								/>
							</div>
							<div className='mt-8'>
								<span className='text-white mb-2 block'>Відео: </span>
								<Controller
									control={control}
									name='videoPath'
									render={({ field: { onChange } }) => (
										<UploadField
											folder='thumbnail'
											onChange={(value: IMediaResponse) => {
												onChange(value.url);
											}}
										/>
									)}
								/>
							</div>
							<Controller
								control={control}
								name='isPublic'
								render={({ field: { onChange, value } }) => (
									<TogglePublic
										clickHandler={() => {
											onChange(!value);
										}}
										isEnabled={!!value}
									/>
								)}
							/>
						</div>
						<div className='w-5/12 p-3 pl-10'>
							<VideoInformation
								fileName=''
								videoId={videoId}
								isUploaded
								thumbnailPath={watch('thumbnailPath')}
							/>
						</div>

						<div className='mt-10 '>
							<Button>{isUpdateLoading ? 'Зачекайте' : 'Зберегти'}</Button>
						</div>
					</form>
				)}
			</div>
		</Layout>
	);
};

export default VideoEdit;
