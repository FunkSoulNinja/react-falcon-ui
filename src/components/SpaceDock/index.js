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
	height: ${size}px;
	width: ${size}px;
	background-color: rgb(200, 54, 203);
	border-radius: 50%;
	cursor: pointer;
`

// class SpaceDock extends React.PureComponent {
// 	childRefs = React.Children.map(this.props.children, () => React.createRef())
// 	dockChildren = () => {
// 		this.childRefs.forEach(ref => ref.current.reset())
// 	}
// 	render() {
// 		return (
// 			<Dock onPointerDown={this.dockChildren}>
// 				{React.Children.map(this.props.children, (child, i) => {
// 					this.childRefs[i] = React.createRef()
// 					return <Dockable ref={this.childRefs[i]}>{child}</Dockable>
// 				})}
// 			</Dock>
// 		)
// 	}
// }

function SpaceDock(props) {
	const childRefs = React.Children.map(props.children, () => React.createRef())
	function dockChildren() {
		childRefs.forEach(ref => ref.current.reset())
	}
	return (
		<Dock onPointerDown={dockChildren}>
			{React.Children.map(props.children, (child, i) => {
				return <Dockable ref={childRefs[i]}>{child}</Dockable>
			})}
		</Dock>
	)
}

export default SpaceDock
