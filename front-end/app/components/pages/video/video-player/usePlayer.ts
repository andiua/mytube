import { useCallback, useEffect, useRef, useState } from 'react';
import { IVideElement } from './video-player.interface';

export const usePlayer = () => {
	const videoRef = useRef<IVideElement>(null);

	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0); // current video duration
	const [videoTime, setVideoTime] = useState(0); // full video duration
	const [progress, setProgress] = useState(0); // progress video %

	useEffect(() => {
		// time of the video
		const originalDuration = videoRef.current?.duration;
		if (originalDuration) setVideoTime(originalDuration);
	}, [videoRef.current?.duration]);

	const toggleVideo = useCallback(() => {
		// play/pause video
		if (!isPlaying) {
			videoRef.current?.play();
			setIsPlaying(true);
		} else {
			videoRef.current?.pause();
			setIsPlaying(false);
		}
	}, [isPlaying]);

	const forward = () => {
		if (videoRef.current) videoRef.current.currentTime += 15;
	};

	const revert = () => {
		if (videoRef.current) videoRef.current.currentTime -= 15;
	};

	const fullScreen = () => {
		const video = videoRef.current;
		if (!video) return;

		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.msRequestFullscreen) {
			video.msRequestFullscreen();
		} else if (video.mozRequestFullscreen) {
			video.mozRequestFullscreen();
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen();
		}
	};

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const updateProgress = () => {
			setCurrentTime(video.currentTime);
			setProgress((video.currentTime / videoTime) * 100);
		};

		video.addEventListener('timeupdate', updateProgress);

		return () => {
			video.removeEventListener('timeupdate', updateProgress);
		};
	}, [videoTime]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowRight':
					forward();
					break;

				case 'ArrowLeft':
					revert();
					break;

				case ' ':
					e.preventDefault();
					toggleVideo();
					break;

				case 'f':
					fullScreen();
					break;

				default:
					return;
			}
		};

		videoRef.current?.addEventListener('keydown', handleKeyDown);

		return () => {
			videoRef.current?.removeEventListener('keydown', handleKeyDown);
		};
	}, [toggleVideo]);

	return {
		videoRef,
		toggleVideo,
		fullScreen,
		status: {
			isPlaying,
			progress,
			currentTime,
			videoTime
		}
	};
};
