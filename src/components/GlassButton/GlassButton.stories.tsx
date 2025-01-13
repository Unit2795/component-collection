import GlassButton from "./GlassButton.tsx";
import {
	Meta,
	StoryObj
} from "@storybook/react";

const meta = {
	title: "Glass Button",
	component: GlassButton,
	argTypes: {
		variant: {
			control: {
				type: "select"
			},
			options: [ "primary", "secondary", "neutral" ],
		},
		onClick: {
			table: {
				disable: true
			},
		},
		type: {
			table: {
				disable: true
			},
		},
	},
} satisfies Meta<typeof GlassButton>;

export default meta;
type Story = StoryObj<typeof GlassButton>;

export const Default: Story = {
	args: {
		children: "Glass Button",
		onClick: () => {
			alert( "Button clicked!" );
		},
		variant: "neutral"
	}
};
