import { useAuth } from '@/hooks/useAuth';
import { api } from '@/store/api/api';
import dayjs from 'dayjs';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Sidebar.module.scss';
import Menu from './menu/Menu';
import { menu } from './menu/menu.data';

const Sidebar: FC = () => {
	const { user } = useAuth();
	const { data: profile } = api.useGetProfileQuery(null, {
		skip: !user
	});
	return (
		<aside className={styles.sidebar}>
			<Link href='/'>
				<span className={styles.logo}>MyTube</span>
			</Link>

			<Menu title='Меню' items={menu} />

			{user && (
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
			)}

			<div className={styles.copy}>
				@ {dayjs().year()} MyTube by Andrii Babych
			</div>
		</aside>
	);
};

export default Sidebar;
