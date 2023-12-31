// import {
// 	ChakraProvider,
// 	VStack,
// 	HStack,
// 	Box,
// 	FormControl,
// 	FormLabel,
// 	Input,
// 	Button,
// } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [nomeCompleto, setNomeCompleto] = useState("");
	const [cpf, setCpf] = useState("");
	const [grupo, setGrupo] = useState("");

	const handleRegister = () => {
		if (username && password && nomeCompleto && cpf && grupo) {
			const server = "http://localhost:8000";
			const data = {
				usuario: username,
				senha: password,
				nomeCompleto: nomeCompleto,
				cpf: cpf,
				grupo: grupo
			};
			const requestOptions = {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			};
			fetch(server + '/usuario', requestOptions)
				.then(response => response.json())
				.then(data => {
					if (data.codigo === 200) {
						alert("Registrado com sucesso");
						setLoggedIn(true);
						setIsLoggedIn(true);
						navigate("/");
					} else {
						alert("Credenciais falhou");
					}
				})
				.catch(error => console.error("Erro ao enviar requisição:", error));
		} else {
			alert("Preencha todos os campos");
		}
		// if (username && password) {
		// 	alert("Registrado com sucesso!");
		// 	navigate("/login");
		// } else {
		// 	alert("Preencha todos os campos.");
		// }
	};

	return (
		<div>
			<h2>Cadastro</h2>
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
			<input
				type="text"
				placeholder="Nome Completo"
				value={nomeCompleto}
				onChange={e => setNomeCompleto(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Cpf sem ponto/traço"
				value={cpf}
				onChange={e => setCpf(e.target.value)}
			/>
			<select onChange={e => setGrupo(e.target.value)}>
				<option value="">Selecione o Grupo</option>
				<option value="ADMINISTRADOR">Administrador</option>
				<option value="PACIENTE">Paciente</option>
				<option value="MEDICO">Médico(a)</option>
			</select>
			<br />
			<button onClick={handleRegister}>Registrar</button>
		</div>
		// <div>
		// 	<ChakraProvider>
		// 		<Box width="600px" margin="auto" p={3}>
		// 			<form onSubmit={handleSubmit}>
		// 				<VStack spacing={2}>
		// 					<FormControl id="name">
		// 						<FormLabel>Nome</FormLabel>
		// 						<Input type="text" required />
		// 					</FormControl>

		// 					<FormControl id="email">
		// 						<FormLabel>Email</FormLabel>
		// 						<Input type="email" required />
		// 					</FormControl>

		// 					<FormControl id="cpf">
		// 						<FormLabel>CPF</FormLabel>
		// 						<Input type="number" required />
		// 					</FormControl>

		// 					<FormControl id="phone">
		// 						<FormLabel>Telefone</FormLabel>
		// 						<Input type="tel" required />
		// 					</FormControl>

		// 					<FormControl id="birthdate">
		// 						<FormLabel>Data de Nascimento</FormLabel>
		// 						<Input type="date" required />
		// 					</FormControl>

		// 					<FormControl id="sus">
		// 						<FormLabel>Número do SUS</FormLabel>
		// 						<Input type="number" required />
		// 					</FormControl>

		// 					<HStack w="100%">
		// 						<FormControl id="cep" w="30%">
		// 							<FormLabel>CEP</FormLabel>
		// 							<Input type="number" required />
		// 						</FormControl>

		// 						<FormControl id="street" w="70%">
		// 							<FormLabel>Rua</FormLabel>
		// 							<Input type="text" required />
		// 						</FormControl>
		// 					</HStack>

		// 					<HStack w="100%">
		// 						<FormControl id="neighborhood" w="55%">
		// 							<FormLabel>Bairro</FormLabel>
		// 							<Input type="text" required />
		// 						</FormControl>

		// 						<FormControl id="number" w="15%">
		// 							<FormLabel>Número</FormLabel>
		// 							<Input type="number" required />
		// 						</FormControl>

		// 						<FormControl id="complement" w="30%">
		// 							<FormLabel>Complemento</FormLabel>
		// 							<Input type="text" />
		// 						</FormControl>
		// 					</HStack>

		// 					<FormControl id="password">
		// 						<FormLabel>Senha</FormLabel>
		// 						<Input type="password" required />
		// 					</FormControl>

		// 					<FormControl id="password">
		// 						<FormLabel>Confirmar Senha</FormLabel>
		// 						<Input type="password" required />
		// 					</FormControl>

		// 					<Link to="/login">
		// 						<Button
		// 							type="submit"
		// 							colorScheme="blue"
		// 							w="100%"
		// 						>
		// 							Cadastrar
		// 						</Button>
		// 					</Link>
		// 				</VStack>
		// 			</form>
		// 		</Box>
		// 	</ChakraProvider>
		// </div>
	);
};
