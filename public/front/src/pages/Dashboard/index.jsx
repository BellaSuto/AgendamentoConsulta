import { Link } from "react-router-dom";
import { DashboardDiv } from "../../styles/dashboard";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import { FaHandsHelping } from "react-icons/fa";

export const Dashboard = ({ isHighContrast, fontSize, isLoggedIn }) => {
	const componentStyles = {
		backgroundColor: isHighContrast
			? "var(--secondary-bg)"
			: "var(--primary-bg)",
		color: isHighContrast ? "var(--brand-2)" : "var(--brand-1)",
	};

	return (
		<DashboardDiv style={componentStyles}>
			{isLoggedIn ? (
				<div className="card">
					<div className="primary-card">
						<h2 style={componentStyles}>
							Vamos agendar uma consulta?
						</h2>
						<ButtonGroup
							display="flex"
							flexDirection={"column"}
							mt={10}
							gap={5}
						>
							<Stack spacing={7} direction="column">
								<Link to="/consulta">
									<Button
										rightIcon={<FaHandsHelping size={25} />}
										w={"100%"}
										colorScheme="blue"
										variant="solid"
										className={
											isHighContrast
												? "high-contrast-login-button"
												: "login-button"
										}
									>
										Só se for agora!
									</Button>
								</Link>
							</Stack>
						</ButtonGroup>
					</div>
					<div className="secondary-card">
						<img
							src="./src/assets/img-home-logged.svg"
							alt="imagem representando um atendimento médico"
						/>
					</div>
				</div>
			) : (
				<div className="card">
					<div className="secondary-card">
						<img
							src="./src/assets/img-home.svg"
							alt="imagem representando uma atendente médica"
						/>
					</div>
					<div className="primary-card">
						<h2 style={componentStyles}>
							Agendamento de consultas sem filas, rápido e fácil!
						</h2>
						<ButtonGroup
							display="flex"
							flexDirection={"column"}
							mt={{ base: 7, md: 10 }}
							gap={{ base: 3, md: 5 }}
							pb={{ base: 8, md: 10 }}
						>
							<Stack
								spacing={{ base: 5, md: 7 }}
								direction="column"
							>
								<Link to="/login">
									<Button
										w={"100%"}
										colorScheme="blue"
										variant="solid"
										className={
											isHighContrast
												? "high-contrast-login-button"
												: "login-button"
										}
									>
										Entrar
									</Button>
								</Link>

								<Link to="/cadastro">
									<Button
										w={"100%"}
										colorScheme="teal"
										variant="contained"
										className={
											isHighContrast
												? "high-contrast-create-account-button"
												: "create-account-button"
										}
									>
										Criar conta
									</Button>
								</Link>
							</Stack>
						</ButtonGroup>
					</div>
				</div>
			)}
		</DashboardDiv>
	);
};
