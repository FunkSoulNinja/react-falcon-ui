import React from 'react'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'

const Button = styled.div`
	width: 50px;
	height: 50px;
	background-color: #0c628b;
	border: none;
	border-radius: 5px;

	:focus {
		outline: none;
	}
	:hover {
		background-color: #1c698c;
	}
`

class Ting extends React.Component {
	state = {
		x: 0,
		y: 0,
		z: 1
	}
	onMouseIn = () => this.setState({ x: 20, y: 2, z: 1.3 })
	onMouseOut = () => this.setState({ x: 0, y: 0, z: 1 })
	render() {
		const { x, y, z } = this.state
		return (
			<Motion style={{ x: spring(x), y: spring(y), z: spring(z) }}>
				{({ x, y, z }) => (
					<Button
						onPointerEnter={this.onMouseIn}
						onPointerLeave={this.onMouseOut}
						style={{
							transform: `scale(${z})`,
							boxShadow: `0 0 ${x}px ${y}px rgba(0, 0, 0, 0.5)`
						}}
					>
						Button
					</Button>
				)}
			</Motion>
		)
	}
}

export default Ting
