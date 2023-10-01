import styled from "styled-components";
import { Box } from "@chakra-ui/react";

export const StyledBox = styled(Box)`
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
