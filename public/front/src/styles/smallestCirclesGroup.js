import styled from "styled-components";

export const CircleContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);

	position: fixed;
	height: 120px;
	width: 120px;
	top: 13vh;
	left: 35%;

	.circle-smallest {
		width: 12px;
		height: 12px;
		background-color: var(--brand-1);
		border-radius: 50%;
	}
`;
