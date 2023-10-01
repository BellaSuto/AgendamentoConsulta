import { styled } from "styled-components";

export const Triangle = styled.div`
	width: 100px;
	height: 100px;
	position: fixed;
	bottom: 0;
	left: 10;
	right: 0;

	&::before {
		content: "";
		width: 100px;
		height: 100px;
		position: absolute;
		top: 0;
		left: 10;
		border-left: 50px solid red;
		border-right: 50px solid red;
		border-bottom: 100px solid red;
		transform: translateX(50%);
		border-radius: 25px;
	}
`;
