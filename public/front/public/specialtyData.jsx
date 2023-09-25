import { BiClinic, BiBrain } from "react-icons/bi";
import { BsGenderFemale, BsHeartPulse } from "react-icons/bs";
import { GiStomach, GiKidneys } from "react-icons/gi";
import { ImEye } from "react-icons/im";
import { MdOutlineElderlyWoman } from "react-icons/md";
import { TbMoodBoy } from "react-icons/tb";
import DermIcon from "../src/assets/derm.svg";
import EndocrineIcon from "../src/assets/endocrine.svg";

export const specialtyData = [
	{
		id: 1,
		name: "Cardiologia",
		description:
			"Especialidade médica que se concentra no diagnóstico e tratamento de doenças do coração.",
		image: "https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2021/04/27dd7cddd3c2da4d8b388b00e3c63c22_L-550x550.jpg",
		icon: (
			<BsHeartPulse
				style={{
					height: "250px",
					width: "250px",
					color: "var(--brand-1)",
				}}
			/>
		),
		doctor: {
			id: 1,
			name: "Dr. Fernando Guimarães",
			specialty: "Cardiologista",
			crm: "034601",
			image: "https://img.freepik.com/premium-vector/avatar-bearded-doctor-doctor-with-stethoscope-vector-illustrationxa_276184-31.jpg",
		},
	},
	{
		id: 2,
		name: "Clínica Médica",
		description:
			"Área da medicina que trata de diagnóstico e tratamento de doenças gerais em adultos",
		image: "https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2021/04/27dd7cddd3c2da4d8b388b00e3c63c22_L-550x550.jpg",
		icon: (
			<BiClinic
				style={{
					height: "250px",
					width: "250px",
					color: "var(--brand-1)",
				}}
			/>
		),
		doctor: {
			id: 2,
			name: "Dra. Marta Poliana",
			specialty: "Médica de clínica geral",
			crm: "000023",
			image: "https://img.freepik.com/premium-vector/black-doctors-character-woman-with-stethoscope-medical-staff-doctor-therapist-professional-hospital-staff-vector-illustration_454120-124.jpg",
		},
	},
	{
		id: 3,
		name: "Dermatologia",
		description:
			"Especialidade médica que se ocupa do diagnóstico e tratamento clínico-cirúrgico das enfermidades relacionados à pele e aos anexos cutâneos.",
		image: "https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2021/04/27dd7cddd3c2da4d8b388b00e3c63c22_L-550x550.jpg",
		icon: <img src={DermIcon} alt="Símbolo da Dermatologia" />,
		doctor: {
			id: 3,
			name: "Dr. Jefferson Müller",
			specialty: "Dermatologista",
			crm: "000031",
			image: "https://i.pinimg.com/originals/64/34/d7/6434d72ce9e16251c4f41f4e5a146567.png",
		},
		// (
		// 	<MdOutlineElderlyWoman
		// 		style={{
		// 			height: "250px",
		// 			width: "250px",
		// 			color: "var(--brand-1)",
		// 		}}
		// 	/>
		// ),
	},
	{
		id: 4,
		name: "Gastroenterologia",
		description:
			"Especialidade médica que aborda doenças do trato gastrointestinal, incluindo estômago, intestinos e órgãos relacionados.",
		image: "https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2021/04/27dd7cddd3c2da4d8b388b00e3c63c22_L-550x550.jpg",
		icon: (
			<GiStomach
				style={{
					height: "250px",
					width: "250px",
					color: "var(--brand-1)",
				}}
			/>
		),
		doctor: {
			id: 4,
			name: "Dr. Guilherme Assis",
			specialty: "Gastroenterologista",
			crm: "000036",
			image: "https://i.pinimg.com/originals/64/34/d7/6434d72ce9e16251c4f41f4e5a146567.png",
		},
	},
	{
		id: 5,
		name: "Ginecologia",
		description:
			"Especialidade médica que cuida do aparelho reprodutor da mulher, abrangendo o útero, os ovários, a vagina, etc.",
		image: "https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2021/04/27dd7cddd3c2da4d8b388b00e3c63c22_L-550x550.jpg",
		icon: (
			<BsGenderFemale
				style={{
					height: "250px",
					width: "250px",
					color: "var(--brand-1)",
				}}
			/>
		),
		doctor: {
			id: 5,
			name: "Dr. Clementina Silva",
			specialty: "Ginecologista",
			crm: "000402",
			image: "https://i.pinimg.com/originals/64/34/d7/6434d72ce9e16251c4f41f4e5a146567.png",
		},
	},
	{
		id: 6,
		name: "Urologia",
		description:
			"Especialidade médica que trata de problemas do trato urinário e do sistema reprodutivo masculino.",
		image: "https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2021/04/27dd7cddd3c2da4d8b388b00e3c63c22_L-550x550.jpg",
		icon: (
			<GiKidneys
				style={{
					height: "250px",
					width: "250px",
					color: "var(--brand-1)",
				}}
			/>
		),
		doctor: {
			id: 6,
			name: "Dr. Adalberto Cunha",
			specialty: "Urologista",
			crm: "000751",
			image: "https://i.pinimg.com/originals/64/34/d7/6434d72ce9e16251c4f41f4e5a146567.png",
		},
	},
	{
		id: 7,
		name: "Pediatria",
		description:
			"Especialidade médica que cuida da saúde de crianças, pré-adolescentes e adolescentes. Sua atuação inclui a prevenção e tratamento de doenças desde o nascimento até a fase adulta.",
		image: "https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2021/04/27dd7cddd3c2da4d8b388b00e3c63c22_L-550x550.jpg",
		icon: (
			<TbMoodBoy
				style={{
					height: "250px",
					width: "250px",
					color: "var(--brand-1)",
				}}
			/>
		),
		doctor: {
			id: 7,
			name: "Dra. Juliana Silva",
			specialty: "Pediatra",
			crm: "004402",
			image: "https://i.pinimg.com/originals/64/34/d7/6434d72ce9e16251c4f41f4e5a146567.png",
		},
	},
	{
		id: 8,
		name: "Geriatria",
		description:
			"Especialidade médica que estuda o diagnóstico das anomalias e doenças relacionadas às pessoas idosas.",
		image: "https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2021/04/27dd7cddd3c2da4d8b388b00e3c63c22_L-550x550.jpg",
		icon: (
			<MdOutlineElderlyWoman
				style={{
					height: "250px",
					width: "250px",
					color: "var(--brand-1)",
				}}
			/>
		),
		doctor: {
			id: 8,
			name: "Dr. Roberto Ambrosio",
			specialty: "Geriatra",
			crm: "000899",
			image: "https://i.pinimg.com/originals/64/34/d7/6434d72ce9e16251c4f41f4e5a146567.png",
		},
	},
	{
		id: 9,
		name: "Endocrinologia",
		description:
			"Especialidade médica que trata de distúrbios hormonais e metabólicos no corpo humano.",
		image: "https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2021/04/27dd7cddd3c2da4d8b388b00e3c63c22_L-550x550.jpg",
		icon: <img src={EndocrineIcon} alt="Símbolo da Endocrinologia" />,
		doctor: {
			id: 9,
			name: "Dra. Camila Santos",
			specialty: "Endocrinologista",
			crm: "00344",
			image: "https://i.pinimg.com/originals/64/34/d7/6434d72ce9e16251c4f41f4e5a146567.png",
		},
	},
	{
		id: 10,
		name: "Oftalmologia",
		description:
			"Especialidade médica focada no diagnóstico e tratamento de doenças oculares e problemas de visão.",
		image: "https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2021/04/27dd7cddd3c2da4d8b388b00e3c63c22_L-550x550.jpg",
		icon: (
			<ImEye
				style={{
					height: "250px",
					width: "250px",
					color: "var(--brand-1)",
				}}
			/>
		),
		doctor: {
			id: 10,
			name: "Dr. André Almeida",
			specialty: "Oftalmologista",
			crm: "000075",
			image: "https://i.pinimg.com/originals/64/34/d7/6434d72ce9e16251c4f41f4e5a146567.png",
		},
	},
	{
		id: 11,
		name: "Neurologia",
		description:
			"Especialidade médica que trata de distúrbios do sistema nervoso, incluindo cérebro, medula espinhal e nervos.",
		image: "https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2021/04/27dd7cddd3c2da4d8b388b00e3c63c22_L-550x550.jpg",
		icon: (
			<BiBrain
				style={{
					height: "250px",
					width: "250px",
					color: "var(--brand-1)",
				}}
			/>
		),
		doctor: {
			id: 11,
			name: "Dra. Maria Oliveira",
			specialty: "Neurologista",
			crm: "010906",
			image: "https://i.pinimg.com/originals/64/34/d7/6434d72ce9e16251c4f41f4e5a146567.png",
		},
	},
];
