// @flow

export function getStyle(
	perspective: number | string,
	rotation: number,
	side: 'outer' | 'inner'
): { transform: string } {
	let rotateValue = -rotation // outer

	if (side === 'inner') rotateValue = 180 - rotation
	return {
		transform: `perspective(${perspective}px) rotateX(${rotateValue}deg)`
	}
}

export function clamp(n: number): number {
	return Math.max(0, Math.min(180, n))
}

export function getPosition(open: void | boolean, setTo: number): number {
	if (open != null) {
		if (open === true) return 180
		else if (open === false) return 0
	}
	return clamp(setTo)
}
