import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
} from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const ModalComponent = ({
	buttonName,
	title,
	message,
	isHighContrast,
	componentStyles,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const modalStyles = {
		background: isHighContrast
			? "var(--secondary-header)"
			: "var(--primary-header)",
		color: isHighContrast ? "var(--white-fixed)" : "var(--gray-0)",
	};

	const buttonStyles = {
		background: "var(--alert-1)",
		color: isHighContrast ? "var(--gray-0)" : "var(--white-fixed)",
		border: "none",
	};

	return (
		<>
			<Button
				leftIcon={<AiOutlineInfoCircle />}
				variant="link"
				size="sm"
				padding={1}
				style={componentStyles}
				onClick={onOpen}
			>
				{buttonName}
			</Button>

			<Modal isOpen={isOpen} onClose={onClose} size="xl" maxW="50%">
				<ModalOverlay />

				<ModalContent style={modalStyles}>
					<ModalHeader>{title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>{message}</ModalBody>

					<ModalFooter>
						<Button
							colorScheme="blue"
							mr={3}
							onClick={onClose}
							style={buttonStyles}
						>
							Fechar
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
