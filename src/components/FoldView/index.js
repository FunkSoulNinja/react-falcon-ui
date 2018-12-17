// @flow
import React, { Component } from 'react'
import type { Node, Element } from 'react'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'

import { getPosition, getStyle } from './utils'

// TODO: Add space when opened.
// TODO: Add shadow when opening.
// TODO: Allow for cascading effect.
// TODO: Pointer EVENTS! don't allow press/actions when hidden
// TODO: Use react hooks, memoize functions increase performence
// TODO: allow reverse motion
// TODO: Cleanup.

const Wrapper = styled.div`
	position: relative;
	visibility: ${props => (props.hidden ? 'hidden' : 'visible')};
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

const defaultStyle = {
	rotateX: 0
}

type FoldViewProps = {
	base: Node,
	outer: Node,
	inner: Node | Element<*>,
	perspective: number | string,
	open: void | boolean,
	setTo: number,
	cascade: boolean,
	blockCascade: boolean,
	hide: boolean
}

const springConfig = {
	stiffness: 170,
	damping: 26,
	precision: 0.1
}

class FoldView extends Component<FoldViewProps> {
	static defaultProps = {
		base: <div>Base</div>,
		outer: <div>Outer</div>,
		inner: <div>Inner</div>,
		perspective: 1000,
		open: false,
		setTo: null,
		cascade: false,
		blockCascade: false,
		hide: false
	}
	cascade = (inner: Element<*>, position: number) => {
		return React.cloneElement(inner, {
			cascade: !this.props.blockCascade,
			hide: position <= 90,
			open: !this.props.blockCascade && position > 175
		})
	}
	getInner = (inner: Element<*>, position: number) => {
		if (this.props.cascade) {
			return this.cascade(inner, position)
		} else if (!this.props.blockCascade) {
			return React.cloneElement(inner, {
				hide: position <= 90,
				open: !this.props.blockCascade && position > 175
			})
		}
		return inner
	}
	render() {
		const { base, outer, inner, perspective, open, setTo, hide } = this.props
		const position = getPosition(open, setTo)
		return (
			<Motion
				defaultStyle={defaultStyle}
				style={{ rotateX: spring(position, springConfig) }}
			>
				{({ rotateX }) => (
					<Wrapper hidden={hide}>
						{base}
						<OuterWrapper style={getStyle(perspective, rotateX, 'outer')}>
							{outer}
						</OuterWrapper>
						<InnerWrapper style={getStyle(perspective, rotateX, 'inner')}>
							{this.getInner(inner, rotateX)}
						</InnerWrapper>
					</Wrapper>
				)}
			</Motion>
		)
	}
}

export default FoldView
