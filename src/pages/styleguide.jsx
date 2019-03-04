import React, { Component } from 'react'

import WorkBench from '../layouts/WorkBench'
import {
  Action,
  Box,
  Checkbox,
  Close,
  Depth,
  Flex,
  Bevel,
  Label,
  Radio,
  Sizing,
  Window,
  Zoom,
} from '../components'

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
      <Window name="Styleguide" level0 active>
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
            <Label htmlFor="foo">Checkbox</Label>
            <Checkbox id="foo" />
            <Radio name="foo" value="bar" />
            <Radio name="foo" value="baz" />
            <Action name="Submit" type="submit" />
          </Flex>
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
