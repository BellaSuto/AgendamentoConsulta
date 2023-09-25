import styled from "styled-components";

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 70px;
	gap: 75px;

	height: 100%;
`;

export const Description = styled.div`
	width: 100%;
	min-width: 500px;

	border: 5px solid var(--brand-1);
	background: transparent;

	h2 {
		padding: 20px;
		font-size: larger;
		font-weight: 600;
	}

	p {
		padding: 0px 20px 20px ;
		text-align: justify;
	}
`;

export const Info = styled.div`
	width: 100%;
	min-width: 500px;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 0 40px;
	gap: 15px;

	ul {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 15px;
		padding: 0;
		max-width: fit-content;

		list-style: none;
	}

	li {
		display: flex;
		align-items: center;
		gap: 8px;

		text-align: justify;
	}
`;
