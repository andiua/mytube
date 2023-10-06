import { FC } from 'react';
import useUploadVideoForm from './useUploadVideoForm';
import { IUploadVideoForm } from './upload-video-form';
import SuccessMessage from './SuccessMessage';
import Field from '@/components/ui/field/Field';
import Textarea from '@/components/ui/textarea/Textarea';
import { Controller } from 'react-hook-form';
import VideoInformation from './video-information/VideoInformation';
import TogglePublic from './toggle-public/TogglePublic';
import { IMediaResponse } from '@/services/media/media.interface';
import UploadField from '@/components/ui/upload-field/UploadField';
import FooterForm from './footer-form/FooterForm';
import styles from '../UploadVideo.module.scss';

const UploadVideoForm: FC<IUploadVideoForm> = ({
	handleCloseModal,
	videoId
}) => {
	const { form, media, status } = useUploadVideoForm({
		videoId,
		handleCloseModal
	});
	console.log(status);
	return (
		<form
			onSubmit={form.handleSubmit(form.onSubmit)}
			className='flex flex-wrap'
		>
			{status.isSuccess && <SuccessMessage />}
			{status.isChosen ? (
				<>
					<div className='w-7/12 pr-6 pt-3'>
						<Field
							{...form.register('name', {
								required: "Назва обов'язково"
							})}
							placeholder='Назва'
							error={form.errors.name}
						/>
						<Textarea
							{...form.register('description', {
								required: "Опис обов'язково"
							})}
							placeholder='Опис'
							error={form.errors.description}
						/>
						<div className='mt-8'>
							<Controller
								control={form.control}
								name='thumbnailPath'
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
							control={form.control}
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
							fileName={media.videoFileName}
							videoId={videoId}
							isUploaded={status.isUploaded}
							thumbnailPath={media.thumbnailPath}
						/>
					</div>

					<FooterForm isUploaded={status.isUploaded} percent={status.percent} />
				</>
			) : (
				<div className={styles.uploadScreen}>
					<Controller
						control={form.control}
						name='videoPath'
						render={() => (
							<UploadField
								title='Спершу завантаж відео'
								folder='video'
								onChange={media.handleUploadVideo}
								setValue={status.setProgressPercentage}
								setIsChosen={status.setIsChosen}
							/>
						)}
					/>
				</div>
			)}
		</form>
	);
};

export default UploadVideoForm;
