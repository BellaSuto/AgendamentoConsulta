// import { useColorMode } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { HeaderDiv} from "../../styles/header";
import { Button } from "@chakra-ui/react";
import { Accessibility } from "../Accessibility";
import { MenuComponent } from "../Menu";

export const Header = ({
	increaseFontSize,
	decreaseFontSize,
	resetFontSize,
	toggleHighContrast,
	isHighContrast,
	isLoggedIn,
	setIsLoggedIn,
}) => {
	const componentStyles = {
		backgroundColor: isHighContrast
			? "var(--secondary-header)"
			: "var(--primary-header)",
		color: isHighContrast ? "var(--white-fixed)" : "var(--gray-0)",
		"borderBottom": isHighContrast
			? "5px solid var(--brand-2)"
			: "5px solid var(--brand-1)",
	};

	const location = useLocation();

	const shouldRenderHeader =
		location.pathname !== "/cadastro" && location.pathname !== "/login";

	if (!shouldRenderHeader) {
		return null;
	}

	return (
		<HeaderDiv>
			<Accessibility
				increaseFontSize={increaseFontSize}
				resetFontSize={resetFontSize}
				decreaseFontSize={decreaseFontSize}
				toggleHighContrast={toggleHighContrast}
				isHighContrast={isHighContrast}
			/>
			<div className="header" style={componentStyles}>
				<div className="image-container">
					<img
						className="logo"
						alt="logo do site"
						src="/banner-ec.png"
						href="/"
					/>
				</div>
				<ul className="nav">
					<li>
						<Link
							to="/"
							className={
								isHighContrast ? "high-contrast-link" : ""
							}
						>
							Início
						</Link>
					</li>
					<li>
						<Link
							to="/unidade"
							className={
								isHighContrast ? "high-contrast-link" : ""
							}
						>
							Unidade
						</Link>
					</li>
					<li>
						<Link
							to="/especialidades"
							className={
								isHighContrast ? "high-contrast-link" : ""
							}
						>
							Especialidades
						</Link>
					</li>
					{isLoggedIn ? (
						<MenuComponent setIsLoggedIn={setIsLoggedIn} />
					) : (
						<Link to="/login">
							<Button className="btn" style={componentStyles}>
								Entrar
							</Button>
						</Link>
					)}
				</ul>
			</div>
		</HeaderDiv>
	);
};
