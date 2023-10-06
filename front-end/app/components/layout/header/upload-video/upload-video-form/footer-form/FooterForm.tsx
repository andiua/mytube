import { FC } from 'react';
import styles from './FooterForm.module.scss';
import cn from 'classnames';
import { MdCheckCircle, MdUpload } from 'react-icons/md';
import Button from '@/components/ui/button/Button';

const FooterForm: FC<{ percent: number; isUploaded: boolean }> = ({
	isUploaded,
	percent
}) => {
	return (
		<div className={styles.footer}>
			<div
				className={cn(styles.status, {
					[styles['icon-uploaded']]: isUploaded
				})}
			>
				<MdUpload className={styles['upload-icon']} />
				<MdCheckCircle className={styles['check-icon']} />
				<span>
					{isUploaded ? 'Відео завантажено' : `Завантажено  ${percent}%...`}
				</span>
			</div>
			<div>
				<Button>Зберегти</Button>
			</div>
		</div>
	);
};

export default FooterForm;
