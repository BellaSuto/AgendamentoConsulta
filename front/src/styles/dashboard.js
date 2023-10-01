import styled from "styled-components";

export const DashboardDiv = styled.div`
	background: transparent;

	z-index: 10;
	height: 100%;

	.card {
		display: flex;
		justify-content: center;
		align-items: center;

		height: 100%;
	}

	.primary-card {
		color: var(--brand-1);

		width: 40%;

		h2 {
			font-size: 2.5em;
		}
	}

	.secondary-card {
		width: 50%;
	}

	.secondary-card img {
		width: 100%;
	}

	.btn-card {
		border-radius: 50px;
	}

	button {
		border-radius: 10px;
	}

	.login-button {
		background: var(--brand-1);
	}

	.high-contrast-login-button {
		background: var(--brand-2);
		color: var(--gray-0);
	}

	.create-account-button {
		border: 1px solid var(--brand-1);
	}

	.create-account-button:hover {
		color: var(--gray-0);
	}

	.high-contrast-create-account-button {
		border: 1px solid var(--brand-2);
		color: var(--brand-2);
	}

	.high-contrast-create-account-button:hover {
		color: var(--white-fixed);
	}
`;

