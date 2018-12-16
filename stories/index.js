// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '../src/components/Button'
import { SwitchForStorybook as Switch } from '../src/components/Switch'
import './FoldView.storybook'

storiesOf('Button', module).add('with text', () => <Button />)
storiesOf('Switch', module).add('default', () => <Switch />)
