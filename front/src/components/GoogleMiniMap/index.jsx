import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Map } from "./styles.js";

const containerStyle = {
	width: "100%",
	maxWidth: "400px",
	height: "100%",

};

const position = {
	lat: 0.03470219225072958,
	lng: -51.06471511555013,
};

export const GoogleMiniMap = () => {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyBun28TfEZOH2NmrkEeRizW3ZcJA7gEMtY",
	});

	return (
		<Map>
			{isLoaded ? (
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={position}
					zoom={16}
				>
					<Marker
						position={position}
						options={{
							label: {
								text: "Hospital de Emergência",
								className: "map-marker",
							},
						}}
					/>
				</GoogleMap>
			) : (
				<></>
			)}
		</Map>
	);
};
