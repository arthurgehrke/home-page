import styled from 'styled-components';

const Nav = styled.div`
	background-color: #f8f8ff;
	border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const NavHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin: auto;
	padding: 14px 20px;
`;

const NavLefHeader = styled.div`
	width: 1/3;
	text-align: right;

	svg {
		margin-right: 10px;
	}
`;

const NavCenterHeader = styled.div`
	width: 1/3;
	text-align: center;

	font-size: 16px;
	text-decoration-color: black;

	transition: opacity 0.2s;

	&:hover {
		opacity: 0.7;
	}
`;

const NavRightHeader = styled.div`
	width: 1/3;
	text-align: left;

	div {
		background: #b0c4de;
		padding: 20px;
		margin-left: 10px;

		span {
			font-size: 16px;
			text-decoration-color: #808080;
		}
	}
`;

export { Nav, NavHeader, NavLefHeader, NavCenterHeader, NavRightHeader };
