import { FC } from 'react';
import styles from './Sidebar.module.scss';
import Link from 'next/link';
import Menu from './menu/Menu';
import { menu } from './menu/menu.data';
import dayjs from 'dayjs';



const Sidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<Link href='/'>
				<span className={styles.logo}>MyTube</span>
			</Link>

			<Menu title='Меню' items={menu} />
			<div className={styles.copy}>
				@ {dayjs().year()} MyTube by Andrii Babych
			</div>
		</aside>
	);
};

export default Sidebar;
