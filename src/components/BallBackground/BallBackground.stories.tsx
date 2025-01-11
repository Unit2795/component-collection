import type {
	Meta,
	StoryObj
} from "@storybook/react";
import BallBackground from "./BallBackground.tsx";

const meta = {
	title: "Ball Background",
	component: BallBackground,
	parameters: {
		layout: "fullscreen"
	},
	decorators: [
		( Story ) => (
			<div
				style={
					{
						height: "100vh",
						width: "100%"
					}
				}>
				<Story/>
			</div>
		),
	]
} satisfies Meta<typeof BallBackground>;

export default meta;
type Story = StoryObj<typeof BallBackground>;

export const Default: Story = {
	args: {
		children: (
			<div className="h-full w-full flex items-center justify-center">
				<h1 className="text-white text-6xl">Hello World!</h1>
			</div>
		)
	}
};
