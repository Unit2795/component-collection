import {
	ReactNode
} from "react";

export interface BallProps {
	x: number;
	y: number;
	radius: number;
	dx: number;
	dy: number;
}

export interface AnimatedBackgroundProps {
	config?: Partial<AnimatedBackgroundConfig>;
	children: ReactNode;
}

export interface BallGradient {
	centerColor: string;
	edgeColor: string;
	edgeStart: number;
}

export interface AnimatedBackgroundConfig {
	speedMultiplier: number;
	ballMinSize: number;
	ballMaxSize: number;
	numberOfBalls: number;
	ballGradient: BallGradient;
	backgroundColor: string;
}
