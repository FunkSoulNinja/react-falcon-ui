// @flow
import React from 'react'
import type { Node, Element } from 'react'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'

import { getPosition, getStyle } from './utils'

// TODO: allow reverse motion
// TODO: Cleanup.

const Wrapper = styled.div`
	position: relative;
`

const BaseWrapper = styled.div``

const OuterWrapper = styled.div`
	position: absolute;
	transform-origin: bottom;
	top: 0;
	backface-visibility: hidden;
`
const InnerWrapper = styled.div`
	position: absolute;
	transform-origin: top;
	backface-visibility: hidden;
`

const defaultStyle = {
	rotation: 0
}

type FoldViewProps = {
	base: Node,
	outer: Node,
	inner: Element<*>,
	perspective: number | string,
	open: void | boolean,
	setTo: number,
	cascade: boolean,
	blockCascade: boolean
}

const springConfig = {
	stiffness: 170,
	damping: 26,
	precision: 0.01
}

function cascade(props: FoldViewProps, position: number) {
	return React.cloneElement(props.inner, {
		cascade: !props.blockCascade,
		hide: position <= 90,
		open: !props.blockCascade && position > 175
	})
}
function getInner(props: FoldViewProps, position: number) {
	if (position <= 90) {
		return null
	}
	if (props.cascade) {
		return cascade(props, position)
	}
	if (!props.blockCascade) {
		return React.cloneElement(props.inner, {
			open: !props.blockCascade && position > 175
		})
	}
	return props.inner
}

function FoldView(props: FoldViewProps) {
	const { base, outer, perspective, open, setTo } = props
	const position = getPosition(open, setTo)
	return (
		<Motion
			defaultStyle={defaultStyle}
			style={{
				rotation: spring(position, springConfig)
			}}
		>
			{({ rotation, height }) => (
				<Wrapper>
					<BaseWrapper>{base}</BaseWrapper>
					<OuterWrapper style={getStyle(perspective, rotation, 'outer')}>
						{outer}
					</OuterWrapper>
					<InnerWrapper style={getStyle(perspective, rotation, 'inner')}>
						{getInner(props, rotation)}
					</InnerWrapper>
				</Wrapper>
			)}
		</Motion>
	)
}

FoldView.defaultProps = {
	base: <div>Base</div>,
	outer: <div>Outer</div>,
	inner: <div>Inner</div>,
	perspective: 1000,
	open: false,
	setTo: null,
	cascade: false,
	blockCascade: false
}

export default FoldView
