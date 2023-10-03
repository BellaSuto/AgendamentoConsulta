import styled from "styled-components";
import { Box } from "@chakra-ui/react";

export const StyledBox = styled(Box)`
	position: fixed;
	left: 0;
	right: 0;
	top: 0;

	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;

	.flex {
		width: 100%;
		align-items: center;
		justify-content: center;
		background: var(--random-4);
		padding: 5px;
		border-radius: 0px 0px 10px 10px;
	}

	@media (max-width: 768px) {
		width: 100vw;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;

		top: auto;
		bottom: 0;

		.flex {
			padding-bottom:15px;
			border-radius: 10px 10px 0px 0px;
		}
	}
`;

export const Button = styled.button`
	padding: 5px 10px;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: #ddd;
	}
`;

// export const CustomBox = styled.div`
// 	.box--mobile {
// 		background: red;
// 	}
// `;
