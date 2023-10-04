import cn from 'classnames';
import { FC } from 'react';
import { BsFullscreen } from 'react-icons/bs';
import { IoIosPause, IoIosPlay } from 'react-icons/io';
import styles from './VideoPlayer.module.scss';
import { usePlayer } from './usePlayer';

const VideoPlayer: FC<{ videoPath: string }> = ({ videoPath }) => {
	const { status, toggleVideo, videoRef, fullScreen } = usePlayer();

	return (
		<div className={styles.wrapper}>
			<video
				ref={videoRef}
				className={styles.player}
				src={`${videoPath}#t=8`}
				preload='metadata'
				onClick={toggleVideo}
			/>
			<div
				className={cn(styles.controls, {
					[styles.hide]: status.isPlaying
				})}
			>
				<button onClick={toggleVideo}>
					{status.isPlaying ? <IoIosPause /> : <IoIosPlay />}
				</button>
				<div className={styles.progressBarWrapper}>
					<div
						className={styles.progressBar}
						style={{ width: status.progress + '%' }}
					></div>
				</div>
				<div className={styles.timeControls}>
					<p>
						{Math.floor(status.currentTime / 60) +
							':' +
							('0' + Math.floor(status.currentTime % 60)).slice(-2)}
					</p>
					<p> / </p>
					<p>
						{Math.floor(status.videoTime / 60) +
							':' +
							('0' + Math.floor(status.videoTime % 60)).slice(-2)}
					</p>
				</div>
				<button onClick={fullScreen}>
					<BsFullscreen className='text-tiny' />
				</button>
			</div>
		</div>
	);
};

export default VideoPlayer;
