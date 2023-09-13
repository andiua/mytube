import React from 'react'
import styles from './Header.module.scss';
import Search from './search/Search';
import IconsRight from './icons-right/IconsRight';

const Header = () => {
	return (
		<header className={styles.header}>
			<Search />
			<IconsRight />
		</header>
	)
}

export default Header