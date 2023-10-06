import { FC } from 'react';
import { IUploadField } from './upload-field.interface';
import { useUploadFile } from './useUploadFile';
import styles from './UploadField.module.scss';
import { useSelector } from 'react-redux';
import { api } from '@/store/api/api';
import { useTypedSelector } from '@/hooks/useTypesSelector';
import { useAuth } from '@/hooks/useAuth';

const UploadField: FC<IUploadField> = ({
	onChange,
	title,
	folder,
	setIsChosen,
	setValue
}) => {
	const { accessToken } = useAuth();
	const { uploadFile } = useUploadFile(
		onChange,
		accessToken,
		folder,
		setValue,
		setIsChosen
	);

	return (
		<div className={styles.file}>
			{title && <h1> {title}</h1>}
			<label>
				<span className='sr-only'>Вибрати файл</span>
				<input type='file' onChange={uploadFile} />
			</label>
		</div>
	);
};

export default UploadField;
