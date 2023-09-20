import { Provider } from 'react-redux';
import '/app/styles/globals.scss';
import type { AppProps } from 'next/app';
import { persistor, store } from '@/store/store';
import { PersistGate } from 'redux-persist/es/integration/react';
import ReduxToastrLib from 'react-redux-toastr';
import NextProgressBar from 'nextjs-progressbar'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextProgressBar
				color='#ff7652'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<Component {...pageProps} />
					<ReduxToastrLib
						newestOnTop={false}
						preventDuplicates
						progressBar
						closeOnToastrClick
						timeOut={4000}
						transitionIn='fadeIn'
						transitionOut='fadeOut'
					/>
				</PersistGate>
			</Provider>
		</>
	);
}
