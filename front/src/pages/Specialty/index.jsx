import {
	CardBody,
	HStack,
	Box,
	Flex,
	Heading,
	Tooltip,
	CardHeader,
	Button,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import "@fontsource/inter";
import { Link } from "react-router-dom";
import { StyledBox, StyledCard } from "../../styles/specialty";
import { specialtyData } from "../../../public/specialtyData";

const SpecialtyCard = ({ specialty, isHighContrast }) => {
	const componentStyles = {
		backgroundColor: isHighContrast
			? "var(--secondary-header)"
			: "var(--primary-header)",
		color: isHighContrast ? "var(--white-fixed)" : "var(--gray-0)",
	};

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
				mt="50px"
				p="0 75px 50px"
				display="flex"
				justifyContent="center"
				flexWrap="wrap"
				gap="75px"
				h="auto"
			>
				{specialtyComponents}
			</Flex>
		</StyledBox>
	);
};
