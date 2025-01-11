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
	],
	argTypes: {
		children: {
			table: {
				disable: true
			},
		},
	},
} satisfies Meta<typeof BallBackground>;

export default meta;
type Story = StoryObj<typeof BallBackground>;

export const Default: Story = {
	args: {
		children: (
			<div className="h-full w-full flex items-center justify-center">
				<h1 className="text-white text-6xl">Hello World!</h1>
			</div>
		),
		config: {
			speedMultiplier: 0.5,
			ballMinSize: 80,
			ballMaxSize: 100,
			numberOfBalls: 8,
			ballGradient: {
				centerColor: "#1f2937",
				edgeColor: "#2e3d52",
				edgeStart: 0.6
			},
			backgroundColor: "#1f2937",
		}
	}
};
