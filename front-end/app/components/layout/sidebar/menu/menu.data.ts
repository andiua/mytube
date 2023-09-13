import { IMenuItem } from './menu.interface';
import { HiCollection, HiStar, HiChartBar, HiHome } from 'react-icons/hi';

export const menu: IMenuItem[] = [
	{
		title: 'Головна',
		icon: HiHome,
		link: '/'
	},
	{
		title: 'Тренди',
		icon: HiChartBar,
		link: '/trending'
	},
	{
		title: 'Мій канал',
		icon: HiStar,
		link: '/my-channel'
	},
	{
		title: 'Мої підписки',
		icon: HiCollection,
		link: '/subscriptions'
	}
];
