import { MediaService } from '@/services/media/media.service';
import { errorCatch } from '@/utils/api.utils';
import { Dispatch, SetStateAction, ChangeEvent } from 'react';
import { useMutation } from 'react-query';

export const useUploadFile = (
	onChange: (...event: any) => void,
	token: string,
	folder?: string,
	setValue?: (val: number) => void,
	setIsChosen?: Dispatch<SetStateAction<boolean>>
) => {
	const { mutateAsync } = useMutation(
		'upload file',
		(data: FormData) => MediaService.upload(data, token, folder, setValue),
		{
			onSuccess: ({ data }) => {
				onChange(data);
			},
			onError: (error: any) => {
				alert(errorCatch(error));
			}
		}
	);

	const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;

		if (!files?.length) return;

		setIsChosen && setIsChosen(true);

		const formData = new FormData();
		formData.append('media', files[0]);

		await mutateAsync(formData);
	};

	return {
		uploadFile
	};
};
