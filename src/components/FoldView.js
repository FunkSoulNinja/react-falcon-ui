// @flow
import React, { Component } from 'react'
import type { Node } from 'react'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'

const Wrapper = styled.div`
	position: relative;
`

const OuterWrapper = styled.div`
	position: absolute;
	top: 0;
	transform-origin: bottom;
	backface-visibility: hidden;
`
const InnerWrapper = styled.div`
	position: absolute;
	transform-origin: top;
	backface-visibility: hidden;
`

function getStyle(perspective: number | string, rotateX: number | string) {
	return {
		transform: `perspective(${perspective}px) rotateX(${rotateX}deg)`
	}
}

const defaultStyle = {
	rotateX: 0
}

type FoldViewProps = {
	base: Node,
	outer: Node,
	inner: Node,
	perspective: number | string
}

type FoldViewState = {
	animate: number
}

class FoldView extends Component<FoldViewProps, FoldViewState> {
	static defaultProps = {
		base: <div>Base</div>,
		outer: <div>Outer</div>,
		inner: <div>Inner</div>,
		perspective: 1000
	}
	state = {
		animate: 0
	}
	forward = () => {
		this.setState({ animate: 180 })
	}
	backward = () => {
		this.setState({ animate: 0 })
	}
	render() {
		const { animate } = this.state
		const { base, outer, inner, perspective } = this.props
		return (
			<>
				<button onClick={this.forward}>Forward!</button>
				<button onClick={this.backward}>Backward!</button>
				<Wrapper>
					{base}
					<Motion
						defaultStyle={defaultStyle}
						style={{ rotateX: spring(animate) }}
					>
						{values => (
							<>
								<OuterWrapper style={getStyle(perspective, -values.rotateX)}>
									{outer}
								</OuterWrapper>
								<InnerWrapper
									style={getStyle(perspective, 180 - values.rotateX)}
								>
									{inner}
								</InnerWrapper>
							</>
						)}
					</Motion>
				</Wrapper>
			</>
		)
	}
}

export default FoldView
