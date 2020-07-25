import styled from 'styled-components';

const Nav = styled.div`
	background-color: #f8f8ff;
	border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const NavHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin: 0 auto;
	padding: 26px 20px;
`;

const NavRightHeader = styled.div`
	width: 1/3;
	text-align: right;

	h1 {
		margin-right: 10px;
	}
`;

const NavCenterHeader = styled.div`
	width: 1/3;
	text-align: center;
`;

const NavLefHeader = styled.div`
	width: 1/3;
	text-align: left;

	h {
		margin-left: 10px;
	}
`;

export { Nav, NavHeader, NavLefHeader, NavCenterHeader, NavRightHeader };
