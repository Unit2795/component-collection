import CylinderText from "@/components/CylinderText/CylinderText.tsx";
import {
	Meta,
	StoryObj
} from "@storybook/react";

const meta = {
	title: "Cylinder Text",
	component: CylinderText,
	decorators: [
		( Story ) => (
			<div
				className="container mx-auto px-6 text-center my-6">
				<Story/>
			</div>
		),
	],
} satisfies Meta<typeof CylinderText>;

export default meta;
type Story = StoryObj<typeof CylinderText>;

export const Default: Story = {
	args: {
		className: "text-5xl text-center",
		top: "Top Text",
		bottom: "Bottom Text"
	}
};
