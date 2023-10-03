import {
	CardBody,
	HStack,
	Box,
	Flex,
	Heading,
	Tooltip,
	CardHeader,
	Button,
	Slider,
	useMediaQuery,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import "@fontsource/inter";
import { Link } from "react-router-dom";
import { StyledBox, StyledCard } from "../../styles/specialty";
import { specialtyData } from "../../../public/specialtyData";
import { useEffect } from "react";

const SpecialtyCard = ({ specialty, isHighContrast }) => {
	const componentStyles = {
		backgroundColor: isHighContrast
			? "var(--secondary-header)"
			: "var(--primary-header)",
		color: isHighContrast ? "var(--white-fixed)" : "var(--gray-0)",
	};

	// const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	// const settings = {
	// 	dots: true,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: isMobile ? 1 : 3, // Altere conforme necessário
	// 	slidesToScroll: 1,
	// };

	// if (isMobile) {
	// 	return (
	// 		<Slider {...settings}>
	// 			<div>
	// 				<h3>Slide 1</h3>
	// 			</div>
	// 			<div>
	// 				<h3>Slide 2</h3>
	// 			</div>
	// 			<div>
	// 				<h3>Slide 3</h3>
	// 			</div>
	// 		</Slider>
	// 	);
	// }

	return (
		<StyledCard
			boxShadow={
				"rgba(128,128,128,0.5) 0px 2px 4px 0px, rgba(128,128,128,0.5) 0px 1px 1px 0px;"
			}
			style={componentStyles}
		>
			<CardHeader p="15px 25px 0px 25px">
				<HStack justifyContent="space-between">
					<Heading size="md">{specialty.name}</Heading>
					<Tooltip
						label={specialty.description}
						placement="bottom-end"
					>
						<InfoOutlineIcon />
					</Tooltip>
				</HStack>
			</CardHeader>
			<CardBody align="center">{specialty.icon}</CardBody>
		</StyledCard>
	);
};

export const Specialty = ({ isHighContrast, isLoggedIn }) => {
	const componentStyles = {
		backgroundColor: isHighContrast
			? "var(--secondary-bg)"
			: "var(--primary-bg)",
		color: isHighContrast ? "var(--white-fixed)" : "var(--gray-0)",
	};

	const specialtyComponents = specialtyData.map((specialty) => (
		<SpecialtyCard
			key={specialty.id}
			specialty={specialty}
			isHighContrast={isHighContrast}
		/>
	));

	useEffect(() => {
		const handleResize = () => {
			const isMobile = window.innerWidth < 768; // Considerando 768px como limite para ser mobile
			if (isMobile) {
				console.log("Abacaxi"); // Exibe "Abacaxi" se for mobile
			} else {
				console.log("Maçã"); // Exibe "Maçã" se for desktop
			}
		};

		// Adiciona um ouvinte de evento para verificar o tamanho da tela ao redimensionar
		window.addEventListener("resize", handleResize);

		// Verifica o tamanho da tela ao carregar a página
		handleResize();

		// Remove o ouvinte de evento quando o componente é desmontado
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []); // Executa apenas uma vez durante a montagem do componente

	return (
		<StyledBox style={componentStyles}>
			<Heading pt="50px" as="h2" fontSize="36px" size="lg">
				Especialidades Médicas
			</Heading>
			<Box w="100%" p="20px" justifyContent="center">
				{isLoggedIn ? (
					<Link to="/consulta">
						<Button
							colorScheme="blue"
							variant="solid"
							className={
								isHighContrast
									? "high-contrast-login-button"
									: "login-button"
							}
						>
							Agendar consulta
						</Button>
					</Link>
				) : (
					""
				)}
			</Box>
			<Flex
				mt={{ base: "10px", md: "50px" }}
				p={{ base: "0 35px 80px", md: "0 75px 50px" }}
				display="flex"
				justifyContent="center"
				flexWrap="wrap"
				gap={{ base: "30px", md: "75px" }}
				h="auto"
			>
				{specialtyComponents}
			</Flex>
		</StyledBox>
	);
};
