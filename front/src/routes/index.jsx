import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Unit } from "../pages/Unit";
import { Specialty } from "../pages/Specialty";
import { Scheduling } from "../pages/Scheduling";
import { Register } from "../pages/Register";
import { Header } from "../components/Header";
// import { Accessibility } from "../components/Accessibility";
import { ChakraProvider } from "@chakra-ui/react";
import { Login } from "../pages/Login";
import { Appointment } from "../pages/Appointment";
import { useState } from "react";

export const RoutesApp = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [fontSize, setFontSize] = useState(16);
	const [isHighContrast, setIsHighContrast] = useState(false);

	const increaseFontSize = () => {
		setFontSize(fontSize + 2);
	};

	const resetFontSize = () => {
		setFontSize(16);
	};

	const decreaseFontSize = () => {
		setFontSize(fontSize - 2);
	};

	const toggleHighContrast = () => {
		setIsHighContrast(!isHighContrast);
	};

	return (
		<ChakraProvider>
			<Router>
				<Header
					increaseFontSize={increaseFontSize}
					decreaseFontSize={decreaseFontSize}
					resetFontSize={resetFontSize}
					toggleHighContrast={toggleHighContrast}
					isHighContrast={isHighContrast}
					isLoggedIn={isLoggedIn}
					setIsLoggedIn={setIsLoggedIn}
				/>
				<Routes>
					<Route
						path="/"
						element={
							<Dashboard
								isHighContrast={isHighContrast}
								isLoggedIn={isLoggedIn}
							/>
						}
					/>
					<Route
						path="/unidade"
						element={
							<Unit
								fontSize={fontSize}
								isHighContrast={isHighContrast}
							/>
						}
					/>
					<Route
						path="/especialidades"
						element={
							<Specialty
								isHighContrast={isHighContrast}
								isLoggedIn={isLoggedIn}
							/>
						}
					/>
					<Route
						path="/agendamento"
						element={<Scheduling isHighContrast={isHighContrast} />}
					/>
					<Route
						path="/cadastro"
						element={<Register isHighContrast={isHighContrast} />}
					/>
					<Route
						path="/login"
						element={
							<Login
								isHighContrast={isHighContrast}
								setIsLoggedIn={setIsLoggedIn}
							/>
						}
					/>
					<Route
						path="/consulta"
						element={
							<Appointment isHighContrast={isHighContrast} />
						}
					/>
				</Routes>
			</Router>
		</ChakraProvider>
		// <ChakraProvider>
		// 	<Router>
		// 		{/* <Accessibility /> */}
		// 		<Header />
		// 		<Routes>
		// 			<Route path="/" element={<Dashboard />} />
		// 			<Route path="/unidade" element={<Unit />} />
		// 			<Route path="/especialidades" element={<Specialty />} />
		// 			<Route path="/agendamento" element={<Scheduling />} />
		// 			<Route path="/cadastro" element={<Register />} />
		// 		</Routes>
		// 	</Router>
		// </ChakraProvider>
	);
};
