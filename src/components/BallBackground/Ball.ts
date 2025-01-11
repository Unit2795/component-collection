import {
	BallGradient,
	BallProps
} from "./types.ts";

export class Ball implements BallProps {
	x: number;

	y: number;

	radius: number;

	dx: number;

	dy: number;

	constructor( x: number, y: number, radius: number, dx: number, dy: number ) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.dx = dx;
		this.dy = dy;
	}

	draw( ctx: CanvasRenderingContext2D, gradient: BallGradient ): void {
		const radialGradient = ctx.createRadialGradient(
			this.x,
			this.y,
			0,
			this.x,
			this.y,
			this.radius
		);
		radialGradient.addColorStop(
			0,
			gradient.centerColor
		);
		radialGradient.addColorStop(
			gradient.edgeStart,
			gradient.centerColor
		);
		radialGradient.addColorStop(
			1,
			gradient.edgeColor
		);

		ctx.beginPath();
		ctx.arc(
			this.x,
			this.y,
			this.radius,
			0,
			Math.PI * 2
		);
		ctx.fillStyle = radialGradient;
		ctx.fill();
		ctx.closePath();
	}

	checkCollision( other: Ball ): boolean {
		const dx = this.x - other.x;
		const dy = this.y - other.y;
		const dvx = this.dx - other.dx;
		const dvy = this.dy - other.dy;

		// Check if balls are moving towards each other
		const movingTowards = dx * dvx + dy * dvy < 0;

		// Only collide if they're moving towards each other
		if ( !movingTowards ) return false;

		const distance = Math.sqrt( dx * dx + dy * dy );
		const sumOfRadii = this.radius + other.radius;

		return distance < sumOfRadii;
	}

	resolveCollision( other: Ball ): void {
		const tempDx = this.dx;
		const tempDy = this.dy;
		this.dx = other.dx;
		this.dy = other.dy;
		other.dx = tempDx;
		other.dy = tempDy;
	}

	update( width: number, height: number ): void {
		this.x += this.dx;
		this.y += this.dy;

		if ( this.x - this.radius < 0 ) {
			this.x = this.radius;
			this.dx = Math.abs( this.dx );
		} else if ( this.x + this.radius > width ) {
			this.x = width - this.radius;
			this.dx = -Math.abs( this.dx );
		}

		if ( this.y - this.radius < 0 ) {
			this.y = this.radius;
			this.dy = Math.abs( this.dy );
		} else if ( this.y + this.radius > height ) {
			this.y = height - this.radius;
			this.dy = -Math.abs( this.dy );
		}
	}
}
