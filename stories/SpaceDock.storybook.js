import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import SpaceDock from '../src/components/SpaceDock'

class DynamicChildComponents extends React.Component {
	state = {
		components: []
	}
	handleClick = () => {
		this.setState(prev => ({
			components: [...prev.components, <Item />]
		}))
	}
	render() {
		return (
			<>
				<button onClick={this.handleClick}>Add</button>
				<SpaceDock>{this.state.components}</SpaceDock>
			</>
		)
	}
}

const Item = styled.div`
	height: 50px;
	width: 50px;
	background-color: rgb(200, 54, 203);
	border: 2px solid blue;
	border-radius: 50%;
	cursor: pointer;
`

storiesOf('SpaceDock', module)
	.add('default', () => (
		<SpaceDock>
			<Item />
			<Item />
		</SpaceDock>
	))
	.add('dynamic child components', () => <DynamicChildComponents />)
