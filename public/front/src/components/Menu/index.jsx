import {
	Avatar,
	Button,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import { AiOutlineUser, AiOutlineHistory } from "react-icons/ai";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export const MenuComponent = ({ setIsLoggedIn }) => {
	const navigate = useNavigate();

	const logout = () => {
		setIsLoggedIn(false);
		// localStorage.removeItem("@token:token");
		navigate("/");
	};

	return (
		<Menu>
			<MenuButton
				className="mobile-styles"
				as={Button}
				size={"auto"}
				borderRadius={"50%"}
			>
				<Avatar
					as={Button}
					name="Daniel Lobato"
					src="https://bit.ly/broken-link"
					color="black"
				/>
			</MenuButton>
			<MenuList
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "3px",
					padding: "2px",
				}}
			>
				<MenuItem
					icon={<AiOutlineUser size={25} />}
					style={{ borderRadius: "10px", border: "none" }}
				>
					Perfil
				</MenuItem>
				<MenuItem
					icon={<AiOutlineHistory size={25} />}
					style={{ borderRadius: "10px", border: "none" }}
				>
					Histórico
				</MenuItem>
				<MenuDivider style={{ margin: "3px" }} />
				<MenuItem
					className="MenuItem-Exit"
					icon={<RxExit size={25} />}
					style={{
						backgroundColor: "var(--white-fixed)",
						color: "var(--alert-1)",
						borderRadius: "10px",
						border: "none",
					}}
					onClick={() => logout()}
				>
					Pegar o beco
				</MenuItem>
			</MenuList>
		</Menu>
	);
};
