import styled from "styled-components";

export const HealthCrossDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	width: 60px;
	height: 60px;
	right: 40px;
	bottom: 20px;

	.square {
		border: 5px solid var(--brand-1);
		margin: auto;
	}

	.square--top {
		position: absolute;

		width: 20px;
		height: 20px;
		top: calc(5px - 10px);

		border-bottom: transparent;
	}

	.square--bottom {
		position: absolute;

		width: 20px;
		height: 20px;
		bottom: calc(5px - 10px);

		border-top: transparent;
	}

	.square--right {
		position: absolute;

		width: 20px;
		height: 20px;
		right: calc(5px - 10px);

		border-left: transparent;
	}

	.square--left {
		position: absolute;

		width: 20px;
		height: 20px;
		left: calc(5px - 10px);

		border-right: transparent;
	}
`;
