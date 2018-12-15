import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
	min-width: 35px;
	min-height: 35px;
	background-color: #0c628b;
	border: none;
	border-radius: 5px;

	:focus {
		outline: none;
	}
	:hover {
		background-color: #1c698c;
	}
`

export default Button
