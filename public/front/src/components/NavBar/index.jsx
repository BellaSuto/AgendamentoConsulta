import { useState } from "react";
import styled from "styled-components";

const HamburguerMenuIcon = styled.div`
	width: 30px;
	height: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	cursor: pointer;
	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}

	div {
		width: 100%;
		height: 3px;
		background-color: #333;
		transition: transform 0.3s ease-in-out;
	}

	/* Estilos para animar o ícone ao abrir/fechar o menu */
	${({ open }) =>
		open &&
		`
    div:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    div:nth-child(2) {
      opacity: 0;
    }
    div:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  `}
`;

const MobileMenu = styled.div`
	display: ${({ open }) => (open ? "block" : "none")};
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	background-color: #f9f9f9;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
	padding: 20px;
	box-sizing: border-box;
`;

const MenuItem = styled.div`
	padding: 10px;
	color: #333;
	cursor: pointer;

	&:hover {
		background-color: #ddd;
	}
`;

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div>
			<HamburguerMenuIcon open={menuOpen} onClick={toggleMenu}>
				<div></div>
				<div></div>
				<div></div>
			</HamburguerMenuIcon>
			<MobileMenu open={menuOpen}>
				<MenuItem>Menu Item 1</MenuItem>
				<MenuItem>Menu Item 2</MenuItem>
				<MenuItem>Menu Item 3</MenuItem>
			</MobileMenu>
		</div>
	);
};

export default Navbar;
