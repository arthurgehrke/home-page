import React from 'react';

import {
	Nav,
	NavHeader,
	NavLefHeader,
	NavCenterHeader,
	NavRightHeader,
} from './styles';

const Header = () => {
	return (
		<Nav>
			<NavHeader>
				<NavLefHeader>
					<h1>Logo</h1>
				</NavLefHeader>
				<NavCenterHeader>Options</NavCenterHeader>
				<NavRightHeader>
					<h1>Something</h1>
				</NavRightHeader>
			</NavHeader>
		</Nav>
	);
};

export default Header;
