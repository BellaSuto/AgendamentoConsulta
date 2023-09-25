import {
	Heading,
	Button,
	Flex,
	Box,
	Avatar,
	Text,
	Card,
	CardBody,
	Stack,
	StackDivider,
	CardHeader,
	Tag,
	Divider,
} from "@chakra-ui/react";
// import { useState } from "react";
import { specialtyData } from "../../../public/specialtyData";
import { useLocation } from "react-router-dom";
import "../../styles/imprimir.css";

export const Scheduling = () => {
	// const availableSlots = [
	// 	"Vaga 1",
	// 	"Vaga 2",
	// 	"Vaga 3",
	// 	"Vaga 4",
	// 	"Vaga 5",
	// 	"Vaga 6",
	// 	"Vaga 7",
	// 	"Vaga 8",
	// 	"Vaga 9",
	// 	"Vaga 10",
	// ];
	// const [selectedSlot, setSelectedSlot] = useState(null);

	// const handleSlotSelection = (slot) => {
	// 	setSelectedSlot(slot);
	// };

	// const handleBookAppointment = () => {
	// 	if (selectedSlot) {
	// 		console.log(
	// 			`Agendamento para ${selectedSlot} realizado com sucesso!`
	// 		);
	// 	}
	// };

	const location = useLocation();
	const params = new URLSearchParams(location.search);

	const specialty = params.get("especialidade");
	const date = params.get("date");
	const hour = params.get("hour");

	const functionItem = (specialty) => {
		console.log(date, hour);
		return specialtyData.find((object) => object.name === specialty);
	};

	const itemEncontrado = {
		hour: hour,
		date: date,
		data: functionItem(specialty),
	};

	const handlePrint = () => {
		window.print();
	};

	return (
		<Box>
			<Heading
				className="impressao-oculta"
				mt="50px"
				as="h2"
				fontSize="36px"
				size="lg"
			>
				Agendamento Médico
			</Heading>

			<Flex
				m="100px"
				mt="50px"
				mb="0px"
				display="flex"
				justifyContent="center"
				flexWrap="wrap"
				gap="75px"
			>
				{itemEncontrado ? (
					<Flex display="flex" flexDirection="column" w="500px">
						<Card className="imprimivel-card">
							<CardHeader>
								<Heading as="h2" size="md" pb="5px">
									TICKET DE AGENDAMENTO
								</Heading>
								<Box
									display="flex"
									flexDirection="row"
									alignItems="center"
									justifyContent="space-between"
									p="0px 20px"
								>
									<Text fontSize="12px">
										Código: numberTicket
									</Text>
									<Tag colorScheme="green">Agendado</Tag>
								</Box>
							</CardHeader>
							<Divider />
							<CardBody>
								<Stack divider={<StackDivider />} spacing="4">
									<Box>
										<Heading
											as="h3"
											size="sm"
											pb="2"
											textTransform="uppercase"
										>
											Dados de Agendamento
										</Heading>
										<Box
											display="flex"
											flexDirection="column"
											alignItems="start"
											p="0px 20px"
											gap="5px"
										>
											<Text fontSize="18px">
												Data: {itemEncontrado.data.name}
											</Text>
											<Text fontSize="18px">
												Hora: {itemEncontrado.data.name}
											</Text>
											<Text fontSize="18px">
												Especialidade:{" "}
												{itemEncontrado.data.name}
											</Text>
											<Text fontSize="18px">
												OBS. do Paciente:{" "}
												{itemEncontrado.data.name}
											</Text>
										</Box>
									</Box>

									<Box>
										<Heading
											as="h3"
											size="sm"
											pb="2"
											textTransform="uppercase"
										>
											Dados do Paciente
										</Heading>
										<Box
											display="flex"
											flexDirection="column"
											alignItems="start"
											p="0px 20px"
											gap="5px"
										>
											<Text
												fontSize="18px"
												fontWeight="bold"
											>
												Nome: paciente.nome
											</Text>

											<Text fontSize="18px">
												Idade: paciente.idade
											</Text>
											<Text fontSize="18px">
												Cartão SUS: paciente.sus
											</Text>
										</Box>
									</Box>
									<Box>
										<Heading
											as="h3"
											size="sm"
											pb="2"
											textTransform="uppercase"
										>
											Dados do Profissional
										</Heading>
										<Box
											display="flex"
											flexDirection="row"
											justifyContent="start"
											gap="20px"
										>
											<Avatar
												src={
													itemEncontrado.data.doctor
														.image
												}
												alt={
													itemEncontrado.data.doctor
														.name
												}
												height="100px"
												width="100px"
											/>
											<Box
												display="flex"
												flexDirection="column"
												alignItems="start"
												justifyContent="center"
												gap="5px"
												p="0px"
											>
												<Text
													fontSize="18px"
													fontWeight="bold"
												>
													Nome:{" "}
													{
														itemEncontrado.data
															.doctor.name
													}
												</Text>

												<Text fontSize="18px">
													{
														itemEncontrado.data
															.doctor.specialty
													}
												</Text>
												<Text fontSize="18px">
													CRM:{" "}
													{
														itemEncontrado.data
															.doctor.crm
													}
												</Text>
											</Box>
										</Box>
									</Box>
								</Stack>

								<Text fontSize="12px" textAlign="right">
									Criado em:{" "}
									{`${itemEncontrado.date} ${itemEncontrado.hour}`}
								</Text>
							</CardBody>
						</Card>
						<Button
							className="impressao-oculta"
							onClick={handlePrint}
						>
							Imprimir
						</Button>
					</Flex>
				) : (
					<p>Especialidade não disponível. Tente outra.</p>
				)}
			</Flex>
			{/* <div className="impressao-oculta">
				<Box>
					<h2>Data: 20/09/2023</h2>
					<h3>Quantidades de vagas: 10</h3>
					<h3>Disponíveis: {}</h3>
					<h3>Ocupadas: {}</h3>
					{availableSlots.map((slot, index) => (
						<Button
							key={index}
							colorScheme={
								selectedSlot === slot ? "green" : "blue"
							}
							onClick={() => handleSlotSelection(slot)}
							disabled={selectedSlot === slot}
							mt={2}
						>
							{slot}
						</Button>
					))}
					<Button
						colorScheme="teal"
						mt={4}
						onClick={handleBookAppointment}
						disabled={!selectedSlot}
					>
						Agendar
					</Button>
				</Box>
			</div> */}
		</Box>
	);
};
