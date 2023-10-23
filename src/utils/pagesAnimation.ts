const variants = {
	enter: (direction: number) => {
		return {
			y: direction < 0 ? 100 : -100,
			opacity: 0,
		}
	},
	center: {
		zIndex: 1,
		y: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			y: direction > 0 ? 100 : -100,
			opacity: 0,
		}
	},
}

export const pagesAnimation: any = {
	initial: 'enter',
	animate: 'center',
	exit: 'exit',
	variants: variants,
	transition: {
		y: {
			type: 'spring',
			stiffness: 300,
			damping: 30,
			duration: 5,
		},
		opacity: {
			duration: 5,
		},
	},
}