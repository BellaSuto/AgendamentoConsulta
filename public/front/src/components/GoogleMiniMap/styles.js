import styled from "styled-components";

export const Map = styled.div`
	width: 400px;
	height: 400px;

	.map-marker {
		margin-top: -30px;
		font-size: larger;
		font-weight: 800;
	}

	@media (max-width: 768px) {
		width: 400px;
		height: 250px;
	}
`;
