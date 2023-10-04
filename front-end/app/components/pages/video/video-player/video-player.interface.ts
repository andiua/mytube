export interface IVideElement extends HTMLVideoElement {
	msRequestFullscreen?: () => void;
	mozRequestFullscreen?: () => void;
	webkitRequestFullscreen?: () => void;
}
