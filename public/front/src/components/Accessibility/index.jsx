import { Box, Flex, Button } from "@chakra-ui/react";
import { AiOutlineEye } from "react-icons/ai";
import {
	LiaSearchPlusSolid,
	LiaSearchMinusSolid,
	LiaSearchSolid,
	LiaAmericanSignLanguageInterpretingSolid,
} from "react-icons/lia";
import { ModalComponent } from "../Modal";
import { useState } from "react";

export const Accessibility = ({ toggleHighContrast, isHighContrast }) => {
	const componentStyles = {
		color: isHighContrast ? "var(--gray-0)" : "var(--white-fixed)",
	};

	const toggleVLibras = () => {
		const openVlibrasButton = document.querySelector(".active");

		if (openVlibrasButton) {
			openVlibrasButton.click();
		}
	};

	const defaultFontSize = 16;
	const [fontSize, setFontSize] = useState(defaultFontSize);

	const toggleFontSize = (option) => {
		let newFontSize = fontSize;
		const minFontSize = 10;
		const maxFontSize = 34;

		if (option === "increase") {
			newFontSize += 2;
		}
		if (option === "decrease") {
			newFontSize -= 2;
		}
		if (option === "reset") {
			newFontSize = defaultFontSize;
		}

		if (newFontSize < minFontSize) {
			newFontSize = minFontSize;
		}
		if (newFontSize > maxFontSize) {
			newFontSize = maxFontSize;
		}

		setFontSize(newFontSize);

		const body = document.body;
		const h1 = document.querySelectorAll("h1", "h2");
		body.style.fontSize = `${newFontSize}px`;
		h1.style.fontSize = `${newFontSize}px`;
	};

	const formattedText = (
		<span>
			<p>
				Pessoas com deficiência visual, baixa visão, daltonismo e
				mobilidade reduzida podem navegar em nosso site por meio de
				recursos que foram implementados para garantir este acesso, tais
				como aumento de fonte e navegação por teclado. Para aumentar a
				fonte, é só clicar no botão aumentar fonte (com símbolo
				&quot;lupa+&quot;) em nossa barra de acessibilidade. De maneira
				parecida, para aumentar a fonte, é só clicar no botão diminuir
				fonte (com símbolo &quot;lupa-&quot;). Caso queira voltar ao
				tamanho de fonte original, é só clicar no botão resetar fonte
				(com símbolo &quot;lupa&quot;). Se for necessário, você também
				pode usar o zoom nativo do seu navegador, pressionando as teclas
				&quot;Ctrl&quot; e &quot;+&quot; para aumentar todo o site e
				&quot;Ctrl&quot; e &quot;-&quot; para diminuir. Para voltar ao
				padrão, pressione &quot;Ctrl&quot; e &quot;0&quot;. Há, também
				para fins de tornar o site acessível, os botões de auto
				contraste e VLibras disponíveis.
			</p>

			<p>
				<strong>Navegação por tabulação</strong>
			</p>
			<p>
				Use a tecla Tab para navegar por elementos que recebem ação do
				usuário no site, tais como links, botões, campos de formulário e
				outros na ordem em que eles são apresentados na página, e Shift
				+ Tab para retornar. Use as setas direcionais para acessar as
				informações textuais.
			</p>
			<p>
				<strong>
					Sugestões de programas disponíveis para pessoas com
					deficiência
				</strong>
			</p>
			<p>
				<ul>
					<li>
						{" "}
						* Nitrous Voice Flux: controla o computador por voz.
						Gratuito;
					</li>
					<li>
						{" "}
						* NVDA: software livre para ler tela - vários idiomas
						(Windows);
					</li>
					<li>
						{" "}
						* YeoSoft Text: leitor de tela em inglês e português;
					</li>
					<li>
						{" "}
						* Jaws for Windows: leitor de tela - vários idiomas;
					</li>
					<li>
						{" "}
						* Virtual Vision: leitor de telas em português do
						Brasil;
					</li>
					<li>
						{" "}
						* DOSVOX: sistema para deficientes visuais (Windows ou
						Linux).
					</li>
				</ul>
			</p>
		</span>
	);

	return (
		<Box
			width="100vw"
			px={4}
			top={0}
			left={0}
			right={0}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
			style={{
				backgroundColor: isHighContrast
					? "var(--secondary-header)"
					: "var(--primary-header)",
			}}
		>
			<Flex
				alignItems="center"
				bg={"rgb(63, 159, 214)"}
				p={"5px 10px"}
				borderRadius={"0px 0px 10px 10px"}
			>
				<Box zIndex={150}>
					<Button
						leftIcon={<LiaSearchPlusSolid />}
						variant="link"
						size="sm"
						mr={3}
						onClick={() => toggleFontSize("increase")}
						padding={1}
						style={componentStyles}
					>
						Aumentar Fonte
					</Button>
					<Button
						leftIcon={<LiaSearchMinusSolid />}
						variant="link"
						size="sm"
						mr={3}
						padding={1}
						style={componentStyles}
						onClick={() => toggleFontSize("decrease")}
					>
						Diminuir Fonte
					</Button>
					<Button
						leftIcon={<LiaSearchSolid />}
						variant="link"
						size="sm"
						mr={3}
						padding={1}
						style={componentStyles}
						onClick={() => toggleFontSize("reset")}
					>
						Resetar Fonte
					</Button>
					<Button
						leftIcon={<AiOutlineEye />}
						variant="link"
						size="sm"
						mr={3}
						padding={1}
						style={componentStyles}
						onClick={toggleHighContrast}
					>
						Alto Contraste
					</Button>
					<Button
						leftIcon={<LiaAmericanSignLanguageInterpretingSolid />}
						variant="link"
						size="sm"
						mr={3}
						padding={1}
						style={componentStyles}
						onClick={toggleVLibras}
					>
						VLibras
					</Button>
					<ModalComponent
						buttonName={"Sobre Acessibilidades"}
						title={"Sobre Acessibilidades"}
						message={formattedText}
						isHighContrast={isHighContrast}
						componentStyles={componentStyles}
					/>
				</Box>
			</Flex>
		</Box>
	);
};
