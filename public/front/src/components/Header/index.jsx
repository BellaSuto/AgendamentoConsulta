// import { useColorMode } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { HeaderDiv } from "../../styles/header";
import { Button } from "@chakra-ui/react";
import { Accessibility } from "../Accessibility";
import { MenuComponent } from "../Menu";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

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
		borderBottom: isHighContrast
			? "5px solid var(--brand-2)"
			: "5px solid var(--brand-1)",
	};

	const componentStylesMobile = {
		backgroundColor: isHighContrast
			? "var(--secondary-header)"
			: "var(--primary-header)",
		color: isHighContrast ? "var(--white-fixed)" : "var(--gray-0)",
		borderLeft: isHighContrast
			? "3px solid var(--brand-2)"
			: "3px solid var(--brand-1)",
	};

	const location = useLocation();

	const shouldRenderHeader =
		location.pathname !== "/cadastro" && location.pathname !== "/login";

	if (!shouldRenderHeader) {
		return null;
	}

	const [showSidebar, setShowSidebar] = useState(false);

	const handleToggleSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	return (
		<HeaderDiv>
			<Accessibility
				increaseFontSize={increaseFontSize}
				resetFontSize={resetFontSize}
				decreaseFontSize={decreaseFontSize}
				toggleHighContrast={toggleHighContrast}
				isHighContrast={isHighContrast}
			/>

			<button className="button-menu" onClick={handleToggleSidebar}>
				<IoMdMenu size={35} style={{ color: "var(--random-4)" }} />
			</button>

			{showSidebar && (
				<div className="sidebar" style={componentStylesMobile}>
					<ul className="ul">
						<li
							className="li--close--top"
							onClick={handleToggleSidebar}
						>
							<IoMdClose className="close-icon" size={30} />
						</li>
						<li>
							{isLoggedIn ? (
								<MenuComponent
									setIsLoggedIn={setIsLoggedIn}
									isHoghContrast={isHighContrast}
								/>
							) : (
								<Link to="/login">
									<Button
										className="btn"
										style={componentStyles}
									>
										Entrar
									</Button>
								</Link>
							)}
						</li>
						<li>
							<Link
								to="/"
								onClick={handleToggleSidebar}
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
								onClick={handleToggleSidebar}
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
								onClick={handleToggleSidebar}
								className={
									isHighContrast ? "high-contrast-link" : ""
								}
							>
								Especialidades
							</Link>
						</li>
						<li
							className="li--close--bottom"
							onClick={handleToggleSidebar}
						>
							<IoMdClose className="close-icon" size={30} />
						</li>
					</ul>
				</div>
			)}

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
						<MenuComponent
							setIsLoggedIn={setIsLoggedIn}
							isHoghContrast={isHighContrast}
						/>
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
