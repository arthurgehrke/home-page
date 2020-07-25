import React from 'react';

import {
	Nav,
	NavHeader,
	NavLefHeader,
	NavCenterHeader,
	NavRightHeader,
} from './styles';

import Logo from '../../assets/logo.svg';

const Header = () => {
	return (
		<Nav>
			<NavHeader>
				<NavLefHeader>
					<img src={Logo} alt="logo" />
				</NavLefHeader>
				<NavCenterHeader>Options</NavCenterHeader>
				<NavRightHeader>
					<div>
						<span>Quero criar minha loja !</span>
					</div>
				</NavRightHeader>
			</NavHeader>
		</Nav>
	);
};

export default Header;
