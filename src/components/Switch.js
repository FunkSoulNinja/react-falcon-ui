// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

export class SwitchForStorybook extends Component<any, any> {
	state = { on: false }
	flipSwitch = () => {
		this.setState({ on: !this.state.on })
	}
	render() {
		const { on } = this.state
		return <Switch on={on} onChange={this.flipSwitch} />
	}
}

type SwitchType = {
	on: boolean,
	onChange: void => void
}

const Switch = ({ on, onChange }: SwitchType) => (
	<Wrapper on={on}>
		<SwitchInput onChange={onChange} />
		<SwitchFlip on={on} />
	</Wrapper>
)

const Wrapper = styled.label`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	padding: 3px;
	height: 18px;
	width: 32px;
	border-radius: 12px;
	transition: all 0.4s ease;
	cursor: pointer;
	background-color: ${props => (props.on ? '#1aaff3' : '#a6aebc')};
`

const SwitchInput = styled.input.attrs({ type: 'checkbox' })`
	display: none;
`

const SwitchFlip = styled.div`
	height: 14px;
	width: 14px;
	border-radius: 50%;
	background-color: white;
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);
	transition: all 0.4s ease;
	transform: translateX(${props => (props.on ? '18px' : 0)});
`

export default Switch
