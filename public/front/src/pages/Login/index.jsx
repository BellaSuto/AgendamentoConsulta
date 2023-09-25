import { useState } from "react";
// import {
// 	ChakraProvider,
// 	Box,
// 	Button,
// 	FormControl,
// 	FormLabel,
// 	Input,
// 	VStack,
// } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

export const Login = ({ setIsLoggedIn }) => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [username, setUsername] = useState("");
	// const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	// Lógica de autenticação
	// };
	const handleLogin = () => {
		if (username === "usuario" && password === "senha") {
			setLoggedIn(true);
			setIsLoggedIn(true);
			navigate("/");
		} else {
			alert("Credenciais inválidas.");
		}
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Usuário"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Senha"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleLogin}>Login</button>
		</div>

		// 	<ChakraProvider>
		// 		<Box width="300px" margin="auto" p={4}>
		// 			<form onSubmit={handleSubmit}>
		// 				<VStack spacing={4}>
		// 					<FormControl id="email">
		// 						<FormLabel>Email</FormLabel>
		// 						<Input
		// 							type="email"
		// 							value={email}
		// 							onChange={(e) => setEmail(e.target.value)}
		// 							required
		// 						/>
		// 					</FormControl>

		// 					<FormControl id="password">
		// 						<FormLabel>Senha</FormLabel>
		// 						<Input
		// 							type="password"
		// 							value={password}
		// 							onChange={(e) => setPassword(e.target.value)}
		// 							required
		// 						/>
		// 					</FormControl>
		// 					<Link to="/cadastro">
		// 						<Button type="submit" colorScheme="blue">
		// 							Cadastro
		// 						</Button>
		// 					</Link>
		// 					<Button type="submit" colorScheme="blue">
		// 						Entrar
		// 					</Button>
		// 				</VStack>
		// 			</form>
		// 		</Box>
		// 	</ChakraProvider>
	);
};
