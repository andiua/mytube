import Layout from '@/components/layout/Layout';
import { NextPageAuth } from '@/providers/private-route.interface';
import { api } from '@/store/api/api';
import Menu from './../app/components/layout/sidebar/menu/Menu';

const Subscriptions: NextPageAuth = () => {
	const { data: profile } = api.useGetProfileQuery(null);
	return (
		<Layout title='Мої підписки'>
			<Menu
				title='Мої підписки'
				items={
					profile?.subscriptions.map((sub) => ({
						image: sub.toUser.avatarPath,
						title: sub.toUser.name,
						link: `/c/${sub.toUser.id}`
					})) || []
				}
			/>
		</Layout>
	);
};

Subscriptions.isOnlyUser = true;

export default Subscriptions;
