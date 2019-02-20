import React, { Component } from 'react'

import Default from '../layouts/Default'
import {
  Action,
  Box,
  Checkbox,
  Depth,
  Close,
  Label,
  Radio,
  Sizing,
  Zoom,
  Flex,
} from '../components/common'

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
    )
  }
}

const StyleGuide = () => (
  <Default>
    <Form />
    <Close />
    <Sizing />
    <Zoom />
    <Depth />
  </Default>
)

export default StyleGuide
