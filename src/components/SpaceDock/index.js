import React from 'react'
import styled from 'styled-components'

import Dockable from './Dockable'

const Dock = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	width: 50px;
	border: 2px solid black;
	border-radius: 50%;
	cursor: pointer;
`

function SpaceDock({ DockComponent, ...props }) {
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
	return (
		<DockComponent onPointerDown={dockChildren} ref={dockRef}>
			{React.Children.map(props.children, (child, i) => {
				return (
					<Dockable index={i} ref={childRefs[i]} setZ={setZ}>
						{child}
					</Dockable>
				)
			})}
		</DockComponent>
	)
}

SpaceDock.defaultProps = {
	DockComponent: Dock
}

export default SpaceDock
