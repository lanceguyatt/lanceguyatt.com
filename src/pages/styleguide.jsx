import React, { Component } from 'react'

import WorkBench from '../layouts/WorkBench'
import { Box, Flex } from '../primitives'
import {
  Action,
  Bevel,
  Checkbox,
  Close,
  Dd,
  Depth,
  Dl,
  Dt,
  Label,
  Radio,
  Sizing,
  Slider,
  Window,
  Zoom,
} from '../components'

import SubMenu, { SubMenuItem } from '../components/SubMenu'
import Menu, { MenuItem } from '../components/Menu'

class Form extends Component {
  state = {
    submitted: false,
  }

  onSubmit = e => {
    e.preventDefault()
    this.setState({ submitted: true })
  }

  render() {
    const { submitted } = this.state
    return (
      <Window name="Styleguide" level1 active>
        <label htmlFor="red">
          Red
          <Slider id="red" />
        </label>

        <br />
        <br />
        <br />

        <div>
          <Bevel>
            <Box bg="primary" height={32} width={1 / 4} />
            <Box bg="secondary" height={32} width={1 / 4} />
            <Box bg="dark" height={32} width={1 / 4} />
            <Box bg="light" height={32} width={1 / 4} />
          </Bevel>
        </div>

        <Box
          is="form"
          method="post"
          action=""
          p={5}
          bg="secondary"
          onSubmit={() => this.onSubmit}
        >
          {submitted && <Box>Submitted</Box>}
          <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <Label is="label" htmlFor="foo" bg="red" color="light" mr={3}>
                Checkbox
              </Label>
              <Checkbox id="foo" />
            </Flex>
            <Radio name="foo" value="bar" />
            <Radio name="foo" value="baz" />
            <Action disabled name="Submit" type="submit" />
            <Action name="Submit" type="submit" />
          </Flex>
          <Box>
            <Dl flex="none" border={3}>
              <Dt>Default Tool</Dt>
              <Dd>Installer</Dd>
            </Dl>
          </Box>
        </Box>
      </Window>
    )
  }
}

const StyleGuide = () => (
  <WorkBench>
    <Form />
    <Close />
    <Sizing />
    <Zoom />
    <Depth />
  </WorkBench>
)

export default StyleGuide
