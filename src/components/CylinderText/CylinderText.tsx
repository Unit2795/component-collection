import clsx from "clsx";
import {
	ReactNode
} from "react";

/**
 * Rotates some top and bottom text into position as if they were on a 3D cylinder.
 * */
const CylinderText = (
	{
		top,
		bottom,
		className
	}: {
		top: ReactNode,
		bottom: ReactNode,
		className?: string
	}
) => {
	return (
		<div
			className={
				clsx(
					"space-y-2 relative",
					className
				)
			}
			style={
				{
					perspective: "800px"
				}
			}>
			<div className={ clsx( "motion-safe:animate-topRotateIn origin-[50%_-50px]" ) }>
				{top}
			</div>

			<div className={ clsx( "motion-safe:animate-bottomRotateIn origin-[50%_150px]" ) }>
				{bottom}
			</div>
		</div>
	);
};

export default CylinderText;
