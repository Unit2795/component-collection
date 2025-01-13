import {
	Meta,
	StoryObj
} from "@storybook/react";
import RadialGrid from "@/components/RadialGrid/RadialGrid.tsx";

const meta = {
	title: "Radial Grid",
	component: RadialGrid,
	decorators: [
		( Story ) => (
			<div
				style={
					{
						height: "100vh",
						width: "100%"
					}
				}>
				<div className="p-4 bg-white/20 rounded-lg">
					<p className="text-center">
						Try hovering over a cell, click a cell, then click another one to draw
						a connection between them!
					</p>
				</div>

				<Story/>
			</div>
		),
	],
} satisfies Meta<typeof RadialGrid>;

export default meta;
type Story = StoryObj<typeof RadialGrid>;

export const Default: Story = {
};
