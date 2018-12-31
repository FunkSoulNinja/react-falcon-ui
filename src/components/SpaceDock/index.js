import React from 'react'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'

import Dockable from './Dockable'

const size = 50

const Dock = styled.div`
	position: fixed;
	height: ${size}px;
	width: ${size}px;
	border: 2px solid black;
	border-radius: 50%;
	cursor: pointer;
`

export const Item = styled.div`
	height: ${size - 4}px;
	width: ${size - 4}px;
	background-color: rgb(200, 54, 203);
	border: 2px solid blue;
	border-radius: 50%;
	cursor: pointer;
`

function SpaceDock(props) {
	const childRefs = React.Children.map(props.children, React.createRef)
	function dockChildren() {
		childRefs.forEach(ref => ref.current.reset())
	}
	function setZ(childIndex) {
		childRefs.forEach((ref, i) => {
			ref.current.setZIndex(childIndex === i ? 1 : 0)
		})
	}
	const dockRef = React.createRef()
	// console.log(dockRef.clientHeight)
	return (
		<Dock onPointerDown={dockChildren} ref={dockRef}>
			{React.Children.map(props.children, (child, i) => {
				return (
					<Dockable index={i} ref={childRefs[i]} setZ={setZ}>
						{child}
					</Dockable>
				)
			})}
		</Dock>
	)
}

export default SpaceDock
