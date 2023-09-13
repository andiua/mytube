import { FC } from 'react';
import { IMenuItem } from './menu.interface';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Line from '@/components/ui/line/Line';

interface IMenu {
	title: string;
	items: IMenuItem[];
}

const Menu: FC<IMenu> = ({ items, title }) => {
	return (
		<nav className={styles.menu_sidebar}>
			<h3>{title}</h3>
			<ul>
				{items.map((menuItem) => (
					<MenuItem key={menuItem.link} item={menuItem} />
				))}
			</ul>
			<Line />
		</nav>
	);
};

export default Menu;
