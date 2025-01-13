import {
	MAXRADIUS,
	SPOKE_STANDOFF_DISTANCE,
	toCartesian
} from "./helpers.ts";

const GridLines = (
	{
		radials,
		spokes
	}: {
		radials: number;
		spokes: number;
	}
) => (
	<>
		{/* Radial circles */}
		{
			Array.from( {
				length: radials
			} ).map( ( _, i ) => {
				const radius = ( MAXRADIUS / radials ) * ( i + 1 );

				return (
					<circle
						cx="50%"
						cy="50%"
						fill="none"
						key={ i }
						r={ radius }
						stroke="white"
						strokeWidth="1"/>
				);
			} )
		}

		{/* Spokes */}
		{
			Array.from( {
				length: spokes
			} ).map( ( _, i ) => {
				const angle = ( i * 2 * Math.PI ) / spokes;
				const innerRadius = i % 4 === 0 ? 0 : ( MAXRADIUS / radials ) * SPOKE_STANDOFF_DISTANCE;

				const startPoint = toCartesian( {
					angle,
					radius: innerRadius
				} );
				const endPoint = toCartesian( {
					angle,
					radius: MAXRADIUS
				} );

				return (
					<line
						key={ i }
						stroke="white"
						strokeWidth={ 1 }
						x1={ startPoint.x }
						x2={ endPoint.x }
						y1={ startPoint.y }
						y2={ endPoint.y }/>
				);
			} )
		}
	</>
);

export default GridLines;
