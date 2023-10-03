import { Card } from "@chakra-ui/react";
import { GoogleMiniMap } from "../../components/GoogleMiniMap";
import { MainComponent, Description, Info } from "../../styles/unit";
import { AiOutlineGlobal, AiFillPhone } from "react-icons/ai";
import { PiMapPinFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

export const Unit = ({ fontSize, isHighContrast }) => {
	const componentStyles = {
		backgroundColor: isHighContrast
			? "var(--secondary-bg)"
			: "var(--primary-bg)",
		color: isHighContrast ? "var(--white-fixed)" : "var(--gray-0)",
	};

	return (
		// <MainComponent style={componentStyles}>
		<MainComponent isHighContrast={isHighContrast}>
			<Card
				style={componentStyles}
				className="card"
				display={"flex"}
				alignItems={"center"}
				w={{base: "100%", md: "75%"}}
				p={{base: 3, md: 5}}
				gap={10}
				boxShadow={
					"rgba(128,128,128,0.5) 0px 2px 4px 0px, rgba(128,128,128,0.5) 0px 1px 1px 0px;"
				}
			>
				<Description>
					<h2>Hospital de Emergência Oswaldo Cruz</h2>
					<p>
						O Hospital de Emergências Dr. Oswaldo Cruz (HE) é gerido
						pelo Instituto Brasileiro de Gestão Hospitalar (IBGH),
						uma OSS comprometida à excelência hospitalar com a
						missão de promover saúde para a sociedade com equidade,
						transparência e práticas humanizadas.
					</p>
				</Description>
				<Info>
					<ul>
						<li>
							<PiMapPinFill
								size={"24px"}
								color={"var(--brand-1)"}
							/>
							Endereço: Rua Hamilton Silva, nº 139 - Central,
							Macapá - AP, 68902-010
						</li>
						<li>
							<AiOutlineGlobal
								size={"24px"}
								color={"var(--brand-1)"}
							/>
							Site:{" "}
							<a target="blank" href="https://heamapa.org.br/">
								https://heamapa.org.br/
							</a>
						</li>
						<li>
							<AiFillPhone
								size={"24px"}
								color={"var(--brand-1)"}
							/>
							Telefone: (96) 3212-6180
						</li>
						<li>
							<MdEmail size={"24px"} color={"var(--brand-1)"} />
							Email: contato@heamapa.org.br
						</li>
					</ul>
					<GoogleMiniMap />
				</Info>
			</Card>
		</MainComponent>
	);
};
