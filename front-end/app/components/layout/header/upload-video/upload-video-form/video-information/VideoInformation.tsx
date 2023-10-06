import { FC } from 'react';
import styles from './VideoInformation.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface IVideoInformation {
	thumbnailPath?: string;
	videoId: number;
	fileName: string;
	isUploaded: boolean;
}
const VideoInformation: FC<IVideoInformation> = ({
	fileName,
	isUploaded,
	videoId,
	thumbnailPath
}) => {
	return (
		<div className={styles.info}>
			{!thumbnailPath ? (
				<div className={styles.thumbnail}>
					{!isUploaded
						? 'Відбувається завантаження відео...'
						: "Потрібно завантажити прев'ю"}
				</div>
			) : (
				<Image
					src={thumbnailPath}
					width={344}
					height={190}
					alt=''
					layout='responsive'
				/>
			)}

			<div className={styles.details}>
				<div>
					<span>Video link</span>
					<span>
						<Link href={`/v/${videoId}`}>http://local/v/{videoId}</Link>
					</span>
				</div>
				<div>
					<span>Filename</span>
					<span>{fileName}</span>
				</div>
			</div>
		</div>
	);
};

export default VideoInformation;
