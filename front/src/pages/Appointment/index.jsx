import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	Flex,
	FormControl,
	Heading,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const topSpecialtyData = [
	{
		id: 1,
		name: "Clínica Médica",
		description:
			"Área da medicina que trata de diagnóstico e tratamento de doenças gerais em adultos",
		image: "https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2021/04/27dd7cddd3c2da4d8b388b00e3c63c22_L-550x550.jpg",
	},
	{
		id: 2,
		name: "Ginecologia",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image: "https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2021/04/27dd7cddd3c2da4d8b388b00e3c63c22_L-550x550.jpg",
	},
	{
		id: 3,
		name: "Cardiologia",
		description:
			"Especialidade médica que se concentra no diagnóstico e tratamento de doenças do coração.",
		image: "https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2021/04/27dd7cddd3c2da4d8b388b00e3c63c22_L-550x550.jpg",
	},
	{
		id: 4,
		name: "Pediatria",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image: "https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2021/04/27dd7cddd3c2da4d8b388b00e3c63c22_L-550x550.jpg",
	},
	{
		id: 5,
		name: "Urologia",
		description:
			"Especialidade médica que trata de problemas do trato urinário e do sistema reprodutivo masculino.",
		image: "https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2021/04/27dd7cddd3c2da4d8b388b00e3c63c22_L-550x550.jpg",
	},
	{
		id: 6,
		name: "Gastroenterologia",
		description:
			"Especialidade médica que aborda doenças do trato gastrointestinal, incluindo estômago, intestinos e órgãos relacionados.",
		image: "https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2021/04/27dd7cddd3c2da4d8b388b00e3c63c22_L-550x550.jpg",
	},
];

const SpecialtyCard = ({ specialty }) => {
	return (
		<Card
			display="flex"
			justifyContent="center"
			w="170px"
			id={specialty.id}
		>
			<CardBody p={3}>
				<Image
					src={specialty.image}
					alt={specialty.name}
					width="100%"
					borderRadius="lg"
				/>
				<Heading size="sm" mt={3}>
					{specialty.name}
				</Heading>
			</CardBody>
			<CardFooter pt="5px">
				<Button w="100%" colorScheme="blue">
					Selecionar
				</Button>
			</CardFooter>
		</Card>
	);
};

export const Appointment = ({ isHighContrast }) => {
	const navigate = useNavigate();
	const componentStyles = {
		backgroundColor: isHighContrast
			? "var(--secondary-bg)"
			: "var(--primary-bg)",
		color: isHighContrast ? "var(--white-fixed)" : "var(--gray-0)",
	};

	const specialtyComponents = topSpecialtyData.map((specialty) => (
		<SpecialtyCard key={specialty.id} specialty={specialty} />
	));

	const [inputValue, setInputValue] = useState("");
	const [filteredSuggestions, setFilteredSuggestions] = useState([]);
	const suggestions = [
		"Cardiologia",
		"Clínico geral",
		"Dermatologia",
		"Gastroenterologia",
		"Ginecologia",
		"Neurologia",
		"Oftalmologia",
		"Ortopedia e traumatologia",
		"Nutricionista",
		"Psicologia",
		"Pediatria",
		"Urologista",
	];

	const handleInputChange = (e) => {
		const value = e.target.value;
		setInputValue(value);

		// Filtra as sugestões com base no que foi digitado
		const filtered = suggestions.filter((suggestion) =>
			suggestion.toLowerCase().includes(value.toLowerCase())
		);

		setFilteredSuggestions(filtered);
	};

	const handleSuggestionClick = (suggestion) => {
		setInputValue(suggestion);
		setFilteredSuggestions([]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		handleButtonClick();

		const now = new Date();
		const formattedDate = `${now.getDate()}/${
			now.getMonth() + 1
		}/${now.getFullYear()}`;
		const formattedTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

		console.log("Data e hora de impressão:", formattedDate);

		navigate(
			`/agendamento?especialidade=${inputValue}&date=${formattedDate}&hour=${formattedTime}`
		);
	};

	const [time, setTime] = useState(null);

	const handleButtonClick = () => {
		const currentTime = new Date();
		const hours = currentTime.getHours();
		const minutes = currentTime.getMinutes();
		const seconds = currentTime.getSeconds();

		setTime({ hours, minutes, seconds });
	};

	return (
		<Box style={componentStyles} width="100%" height="87vh" p="0% 20%">
			<Heading p="50px 0px" as="h2" fontSize="36px" size="lg">
				Qual especialidade deseja agendar?
			</Heading>

			<FormControl
				height="20vh"
			>
				<InputGroup size="lg">
					<InputLeftElement pointerEvents="none">
						<FaSearch size={22} />
					</InputLeftElement>
					<Input
						type="text"
						placeholder="Digite uma especialidade"
						value={inputValue}
						onChange={handleInputChange}
					/>
				</InputGroup>
				{filteredSuggestions.length > 0 && (
					<ul
						style={{
							borderRadius: "0px 0px 15px 15px",
							background: "var(--brand-2)",
						}}
					>
						{filteredSuggestions.map((suggestion, index) => (
							<li
								key={index}
								onClick={() =>
									handleSuggestionClick(suggestion)
								}
								style={{
									fontSize: "18px",
									padding: "1px 0px",
									height: "auto",
									cursor: "pointer",
									transition: "background-color 0.2s",
								}}
								onMouseEnter={(e) => {
									e.target.style.backgroundColor =
										"var(--brand-1)";
								}}
								onMouseLeave={(e) => {
									e.target.style.backgroundColor = "";
								}}
							>
								{suggestion}
							</li>
						))}
					</ul>
				)}
				<Button
					rightIcon={<ArrowForwardIcon />}
					w="100%"
					colorScheme="blue"
					mt={7}
					onClick={(e) => handleSubmit(e)}
				>
					Próximo
				</Button>

				<Heading as="h4" size="md" color="gray" mt="50px">
					Mais buscadas
				</Heading>
				<Flex
					mt="40px"
					pb="16.7vh"
					display="flex"
					justifyContent="center"
					flexWrap="wrap"
					gap="20px"
				>
					{specialtyComponents}
				</Flex>
			</FormControl>
		</Box>
	);
};
