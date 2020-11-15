import React from 'react';
import { Box, Flex, Grid } from 'theme-ui';

import { TitleBar, Button, Input, Label, Radio } from '../components';

const Test = () => {
  return (
    <Box variant="layout">
      <TitleBar appearance="secondary">Test</TitleBar>
      <Box variant="layout.main">
        <Box __css={{ p: 4, bg: 'primary', width: 'foo' }}>Box</Box>
        <form>
          <Grid gap="test" p="test">
            <Box variant="row">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" />
            </Box>
            <Box variant="row">
              <Label>Options</Label>
              <Flex>
                <Label sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
                  <Radio name="foo" sx={{ mr: 3 }} />
                  <Box bg="yellow">Foo</Box>
                </Label>
                <Label sx={{ display: 'flex' }}>
                  <Radio name="foo" />
                  Bar
                </Label>
                <Label sx={{ display: 'flex' }}>
                  <Radio name="foo" />
                  Baz
                </Label>
              </Flex>
            </Box>
            <Box variant="row">
              <Box __css={{ gridColumn: [null, '2 / span 3'], bg: 'orange' }}>
                <Button type="submit">Contact</Button>
              </Box>
            </Box>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Test;
