import React from 'react';
import '../../style/HeaderStyle.css';
import IconZone from './IconZone';
import Logo from './Logo';
import MenuContainer from './MenuContainer';
import SearchZone from './SearchZone';
const Header = () => {
	return (
		<header>
			<Logo />
			<MenuContainer />
			<SearchZone />
			<IconZone />
		</header>
	);
};

export default Header;
