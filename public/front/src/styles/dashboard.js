import styled from "styled-components";

export const DashboardDiv = styled.div`
	background: transparent;

	display: flex;
	justify-content: center;
	align-items: center;

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
			font-weight: 500;
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

	@media (max-width: 768px) {
		.card {
			flex-direction: column;
			height: auto;
			width: 100vw;
		}

		.primary-card {
			width: 90%;
			padding: 0px 10px;
			line-height: 1.25;

			h2 {
				font-size: 2.3em;
			}
		}

		.secondary-card {
			width: 70%;
		}
	}
`;
