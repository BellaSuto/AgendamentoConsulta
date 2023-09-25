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
		// localStorage.removeItem("@tokenG33:token");
		navigate("/");
	};

	return (
		<Menu>
			<MenuButton as={Button} size={"auto"} borderRadius={"50%"}>
				<Avatar
					as={Button}
					name="Daniel Lobato"
					src="https://bit.ly/broken-link"
					color="none"
				/>
			</MenuButton>
			<MenuList display="flex" flexDirection="column" gap="10px">
				<MenuItem icon={<AiOutlineUser />}>Perfil</MenuItem>
				<MenuItem icon={<AiOutlineHistory />}>Histórico</MenuItem>
				<MenuDivider />
				<MenuItem
					icon={<RxExit />}
					bg={"var(--alert-1)"}
					color={"var(--white-fixed)"}
					onClick={() => logout()}
				>
					Sair
				</MenuItem>
			</MenuList>
		</Menu>
	);
};
