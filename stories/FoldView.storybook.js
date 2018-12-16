import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'

import FoldView from '../src/components/FoldView'

const cardStyle = css`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	width: 150px;
	border-radius: 5px;
	box-shadow: 0px 5px 20px 0 rgba(0, 0, 0, 0.25);
`

const Outer = styled.div`
	${cardStyle}
	background-color: #1b9aad;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
`

const Inner = styled.div`
	${cardStyle}
	background-color: #8c4cab;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
`

storiesOf('FoldView', module).add('default', () => (
	<FoldView
		base={<Outer>Base</Outer>}
		outer={<Outer>Outer</Outer>}
		inner={<Inner>Inner</Inner>}
		perspective={200}
	/>
))
