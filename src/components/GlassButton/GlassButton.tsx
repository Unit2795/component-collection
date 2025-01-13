import "./glassButton.css";
import {
	ButtonProps
} from "./types.ts";
import clsx from "clsx";

/**
 * A button that when hovered, has a glass shimmer effect.
 * */
const GlassButton = (
	{
		children,
		className,
		variant = "neutral",
		type = "button",
		...rest
	}: ButtonProps
) => {
	const variantClass = {
		primary: "bg-blue-500 text-white",
		secondary: "bg-violet-900 text-white",
		neutral: "bg-white/5 text-neutral border border-white/20 hover:bg-white/10"
	};

	return (
		<button
			className={
				clsx(
					variantClass[ variant ],
					className,
					"px-6 py-3 backdrop-blur-sm rounded-lg font-medium shadow-lg transition-colors duration-200 glass-btn"
				)
			}
			type={
				/* eslint-disable-next-line react/button-has-type */
				type
			}
			{ ...rest }>
			{children}
		</button>
	);
};

export default GlassButton;
