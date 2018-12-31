import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'

import FoldView from '../src/components/FoldView/'

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100%;
`

const cardStyle = css`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;
	width: 150px;
	border-radius: 5px;
`

const Base = styled.div`
	${cardStyle}
	box-shadow: 0px 5px 20px 0 rgba(0, 0, 0, 0.25);
	background-color: #1bad90;
`

const Outer = styled.div`
	${cardStyle}
	background-color: #1b9aad;
`

const Inner = styled.div`
	${cardStyle}
	box-shadow: 0px 5px 20px 0 rgba(0, 0, 0, 0.25);
	background-color: #8c4cab;
`

class FoldViewWithWrapper extends React.Component {
	state = {
		open: null,
		position: 0
	}
	foldOpen = () => this.setState({ open: true })
	foldclosed = () => this.setState({ open: false })
	render() {
		return (
			<>
				<FoldView
					{...this.props}
					outer={
						<Outer>
							<button onClick={this.foldOpen}>Open</button>
						</Outer>
					}
					base={
						<Base>
							<button onClick={this.foldclosed}>Close</button>
						</Base>
					}
					open={this.state.open}
					setTo={this.state.position}
				/>
			</>
		)
	}
}

storiesOf('FoldView', module)
	.add('default', () => (
		<Wrapper>
			<FoldViewWithWrapper
				base={<Base>Base</Base>}
				outer={<Outer>Outer</Outer>}
				inner={<Inner>Inner</Inner>}
			/>
		</Wrapper>
	))
	.add('nested with cascade', () => (
		<Wrapper>
			<FoldViewWithWrapper
				base={<Base>Base</Base>}
				outer={<Outer>Outer</Outer>}
				cascade
				inner={
					<FoldView
						base={<Base>Inner 1 / Base 2</Base>}
						outer={<Outer>Outer 2</Outer>}
						inner={<Inner>Inner 2</Inner>}
					/>
				}
			/>
		</Wrapper>
	))
	.add('multi-nested with cascadeBlock', () => (
		<Wrapper>
			<FoldViewWithWrapper
				base={<Base>Base 1</Base>}
				outer={<Outer>Outer 1</Outer>}
				cascade
				inner={
					<FoldView
						base={<Base>Inner 1 / Base 2</Base>}
						outer={<Outer>Outer 2</Outer>}
						inner={
							<FoldView
								base={<Base>Inner 2 / Base3</Base>}
								outer={<Outer>Outer 3</Outer>}
								blockCascade
								inner={
									<FoldViewWithWrapper
										base={<Base>Inner 3 / Base 4</Base>}
										outer={<Outer>Outer 4</Outer>}
										inner={
											<FoldView
												base={<Base>Inner 4 / Base 5</Base>}
												outer={<Outer>Outer 5</Outer>}
												inner={<Inner>Inner 5</Inner>}
											/>
										}
									/>
								}
							/>
						}
					/>
				}
			/>
		</Wrapper>
	))
