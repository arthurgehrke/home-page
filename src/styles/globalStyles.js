import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: 0;
		outline: 0;
	}

	body {
		background: #E6E6FA;
		color: #E6E6FA;
		-webkit-font-smoothing: antialised;
	}
`;
