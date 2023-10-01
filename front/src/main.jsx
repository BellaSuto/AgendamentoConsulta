import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { DefaultGlobalStyle } from "./styles/global.js";
import "./index.css";
// import { ColorModeScript } from "@chakra-ui/react";
// import theme from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
		<DefaultGlobalStyle />
		<App />
	</React.StrictMode>
);
