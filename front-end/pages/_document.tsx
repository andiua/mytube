import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='uk'>
			<Head>
				<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
				<link rel='icon' href='/favicon.ico' type='image/x-icon' />
				<meta name='theme-color' content='#ff7652'/>
				<meta name='msapplication-navbutton-color' content='#ff7652'/>
				<meta name='apple-mobile-web-app-status-bar-style' content='#ff7652'/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
