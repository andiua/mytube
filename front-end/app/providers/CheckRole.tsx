import { FC, PropsWithChildren } from 'react';
import { TypeComponentAuthFields } from './private-route.interface';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	children,
	Component: { isOnlyUser }
}) => {
	const { isLoading, user } = useAuth();
	const { replace, pathname } = useRouter();

	const Children = () => <>{children}</>;
	if (isLoading) return null; //can add own Loader

	if (user) return <Children />;

	if (isOnlyUser) {
		// if client not Auth on Privatepage and this is not main, we redirect to the main page
		pathname !== '/' && replace('/');
	}

	return null;
};

export default CheckRole;
