import React from 'react'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'

const Wrapper = styled.div`
	position: absolute;
`

const springConfig = {
	stiffness: 300,
	damping: 50
}

class Dockable extends React.Component {
	state = {
		pinned: false,
		x: 0,
		y: 0
	}
	reset = () => {
		if (this.state.pinned) return
		this.setState({
			x: 0,
			y: 0
		})
	}
	onDrag = (e: React.MouseEvent) => {
		this.setState(prev => ({
			x: prev.x + e.movementX,
			y: prev.y + e.movementY
		}))
	}
	onMouseUp = () => {
		window.removeEventListener('pointermove', this.onDrag)
	}
	onPointerDown = (e: React.PointerEvent) => {
		e.stopPropagation()
		window.addEventListener('pointermove', this.onDrag)
		window.addEventListener('pointerup', this.onMouseUp, { once: true })
	}
	render() {
		return (
			<Motion
				style={{
					x: spring(this.state.x, springConfig),
					y: spring(this.state.y, springConfig)
				}}
			>
				{({ x, y }) => (
					<Wrapper
						onPointerDown={this.onPointerDown}
						style={{
							transform: `translate3d(${x}px, ${y}px, 0)`
						}}
					>
						{this.props.children}
					</Wrapper>
				)}
			</Motion>
		)
	}
}

export default Dockable
