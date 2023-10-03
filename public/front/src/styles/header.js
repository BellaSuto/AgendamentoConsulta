import styled from "styled-components";

export const HeaderDiv = styled.header`
	position: fixed;
	top: 39px;
	left: 0px;
	right: 0px;
	width: 100vw;
	z-index: 100;

	display: flex;
	flex-direction: column;

	@media print {
		display: none;
	}

	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 45px;

		top: auto;

		height: 10vh;
		padding: 0px 100px 10px;
		border-bottom: 5px solid var(--brand-1);

		color: var(--gray-0);
		background-color: var(--gray-8);
	}

	.image-container {
		height: 60px;
		width: 200px;
		overflow: hidden;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.logo {
		width: 100%;
		height: auto;
		transform: scale(1.1);

		will-change: filter;
		transition: filter 600ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 1.25mm var(--gray-3));
	}

	.nav {
		list-style: none;
		display: flex;
		align-items: center;
		gap: 45px;

		font-size: 20px;

		z-index: 150;
	}

	.nav li a {
		color: var(--gray-1);
		text-decoration: none;
		transition: color 0.5s ease-in-out;
		will-change: filter;
		transition: filter 200ms;
	}
	.nav li a:hover {
		color: var(--brand-1);
		filter: drop-shadow(0 1mm 0.4mm var(--gray-3));
	}

	.nav button {
		color: var(--brand-1);
	}

	.nav button:hover {
		background: var(--brand-1);
		color: var(--white-fixed);
	}

	.btn {
		box-shadow: none;
		border-radius: 10px;
		transition: 1350ms;
		transform: translateY(0);
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.btn:hover {
		transition: 1350ms;
		padding: 10px 20px;
	}

	.high-contrast-link {
		color: var(--white-fixed) !important;
	}
	.high-contrast-link:hover {
		color: var(--brand-2) !important;
	}

	.button-menu {
		display: none;
	}

	@media (max-width: 768px) {
		top: -1px;
		font-size: 24px;

		.header {
			height: 10vh;
			padding: 15px 45vw 20px 10vw;
			border-bottom: 3px solid var(--random-4) !important;

			.image-container {
				left: 0;
			}

			.nav {
				display: none;
			}
		}

		.button-menu {
			display: block;

			position: fixed;
			top: 14px;
			right: 10px;

			width: auto;
			height: auto;

			border-radius: 5px;
			border: 2px solid var(--random-4);

			background: transparent;
		}

		.button-menu:focus {
			border: 2px solid var(--random-4);
		}

		.sidebar {
			position: fixed;
			bottom: 0px;
			right: 0px;

			display: flex;
			align-items: center;
			justify-content: center;

			width: 65vw;
			height: 100vh;

			z-index: 99;

			ul {
				width: 100%;
				height: 100%;

				display: flex;
				flex-direction: column;
				gap: 10px;

				li {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;

					a {
						display: flex;
						justify-content: center;

						width: 100%;

						transition: transform 350ms ease-out;
					}
					a:hover {
						transform: translate(-7px, 0px) scale(1, 1);
					}
				}

				.li--close--top {
					background: var(--alert-1);
				}

				.li--close--bottom {
					position: absolute;
					bottom: 0;

					width: 100%;
					background: var(--alert-1);
				}

				.close-icon {
					transition: transform 350ms ease-out;
				}

				.close-icon:hover {
					transform: rotate(180deg) translate(0px, 0px);
				}
			}
		}
	}
`;

export const Parallel = styled.div`
	width: 1800px;
	height: 200px;

	position: fixed;
	top: -16vh;
	left: 45vw;

	background: rgb(187, 246, 249);
	background: linear-gradient(
		10deg,
		rgba(187, 246, 249, 1) 0%,
		rgba(132, 255, 247, 1) 10%,
		rgba(101, 191, 242, 1) 25%,
		rgba(8, 154, 237, 1) 50%
	);

	transform: skew(-30deg, -5deg);
	border-radius: 25px;

	z-index: 75;
`;
