import Card3D from "./Card3D.tsx";
import {
	Meta,
	StoryObj
} from "@storybook/react";
import GlassButton from "@/components/GlassButton/GlassButton.tsx";

const meta = {
	title: "3D Card",
	component: Card3D,
} satisfies Meta<typeof Card3D>;

export default meta;
type Story = StoryObj<typeof Card3D>;

export const Default: Story = {
	args: {
		children: (
			<div className="h-full w-full p-6 max-w-72 min-h-80 flex flex-col">
				<h1 className="text-white text-2xl underline">Hello World!</h1>

				<p className="text-neutral-400 text-lg mt-4 text-wrap">
					Card component with a 3D hover effect. Uses perspective, rotation, and a radial gradient
				</p>

				<GlassButton className="mt-auto max-w-40">Learn More</GlassButton>
			</div>
		)
	}
};
