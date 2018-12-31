import React from 'react'
import { storiesOf } from '@storybook/react'

import SpaceDock, { Item } from '../src/components/SpaceDock'

class Addable extends React.Component {
	state = {
		components: [<Item />]
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

storiesOf('SpaceDock', module)
	.add('default', () => (
		<SpaceDock>
			<Item />
			<Item />
		</SpaceDock>
	))
	.add('addable', () => <Addable />)
