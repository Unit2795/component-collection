import {
	useEffect,
	useRef
} from "react";
import {
	AnimatedBackgroundConfig,
	AnimatedBackgroundProps
} from "./types.ts";
import {
	Ball
} from "./Ball.ts";

const defaultConfig: AnimatedBackgroundConfig = {
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
};

/**
 * Creates a background with animated balls.
 *
 * Features:
 * - Balls move around the screen
 * - Balls collide with each other and the edge of the canvas using complete velocity reflection/swap
 * 		- If balls spawn within each other or overlap, they will pass through each other, then collide after they leave
 * 		each other's influence
 * - Background color, radial gradient of the balls, ball speed, ball size, and number of balls can be customized
 * - Balls have consistent speed, size, and collisions across different screen resolutions and DPI
 * - Canvas is responsive and fills the container, even when the window is resized
 * */

const BallBackground = ( {
	config,
	children
}: AnimatedBackgroundProps ) => {
	const containerRef = useRef<HTMLDivElement>( null );
	const canvasRef = useRef<HTMLCanvasElement>( null );
	const dimensionsRef = useRef<{
		width: number;
		height: number
	}>( {
		width: 0,
		height: 0
	} );

	useEffect(
		() => {
			const canvas = canvasRef.current;
			const container = containerRef.current;
			if ( !canvas || !container ) return;

			const ctx = canvas.getContext( "2d" );
			if ( !ctx ) return;

			const finalConfig = {
				...defaultConfig,
				...config
			};

			const updateSize = (): void => {
				const dpr = window.devicePixelRatio || 1;
				const rect = container.getBoundingClientRect();

				dimensionsRef.current = {
					width: rect.width,
					height: rect.height
				};

				canvas.width = rect.width * dpr;
				canvas.height = rect.height * dpr;
				canvas.style.width = `${ rect.width.toString() }px`;
				canvas.style.height = `${ rect.height.toString() }px`;

				ctx.scale(
					dpr,
					dpr
				);
			};

			window.addEventListener(
				"resize",
				updateSize
			);
			updateSize();

			const baseWidth = 1920;
			const baseHeight = 1080;
			const {
				width,
				height
			} = dimensionsRef.current;
			const viewportScale = Math.sqrt( ( width * height ) / ( baseWidth * baseHeight ) );

			const balls: Ball[] = [];
			for ( let i = 0; i < finalConfig.numberOfBalls; i++ ) {
				const scaledMinSize = finalConfig.ballMinSize * viewportScale;
				const scaledMaxSize = finalConfig.ballMaxSize * viewportScale;
				const radius = Math.random() * ( scaledMaxSize - scaledMinSize ) + scaledMinSize;

				const x = Math.random() * ( width - radius * 2 ) + radius;
				const y = Math.random() * ( height - radius * 2 ) + radius;

				const speedScale = Math.sqrt( viewportScale );
				const speed = ( Math.random() * 2 + 1 ) * finalConfig.speedMultiplier * speedScale;
				const angle = Math.random() * Math.PI * 2;

				balls.push( new Ball(
					x,
					y,
					radius,
					Math.cos( angle ) * speed,
					Math.sin( angle ) * speed
				) );
			}

			let animationId: number;
			const animate = (): void => {
				const {
					width,
					height
				} = dimensionsRef.current;

				ctx.fillStyle = finalConfig.backgroundColor;
				ctx.fillRect(
					0,
					0,
					width,
					height
				);

				// Check for collisions
				for ( let i = 0; i < balls.length; i++ ) {
					for ( let j = i + 1; j < balls.length; j++ ) {
						if ( balls[ i ].checkCollision( balls[ j ] ) ) {
							balls[ i ].resolveCollision( balls[ j ] );
						}
					}
				}

				// Update and draw balls
				balls.forEach( ball => {
					ball.update(
						width,
						height
					);
					ball.draw(
						ctx,
						finalConfig.ballGradient
					);
				} );

				animationId = requestAnimationFrame( animate );
			};

			animate();

			return () => {
				window.removeEventListener(
					"resize",
					updateSize
				);
				cancelAnimationFrame( animationId );
			};
		},
		[ config ]
	);


	return (
		<div
			className="relative w-full h-full"
			ref={ containerRef }>
			{children}

			<canvas
				className="absolute top-0 left-0 -z-10"
				ref={ canvasRef }/>
		</div>
	);
};

export default BallBackground;
