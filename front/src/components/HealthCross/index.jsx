import { HealthCrossDiv } from "../../styles/healthCross";

export const HealthCross = () => {
	return (
		<HealthCrossDiv>
			<div className="square square--left"></div>
			<div className="square square--right"></div>
			<div className="square square--top"></div>
			<div className="square square--bottom"></div>
		</HealthCrossDiv>
	);
};
