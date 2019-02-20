import React from 'react'

import Default from '../layouts/Default'
import WorkBench from '../containers/WorkBench'
import { SEO } from '../components'

const WorkBenchPage = () => (
  <Default>
    <>
      <SEO title="Home" />
      <WorkBench />
    </>
  </Default>
)

export default WorkBenchPage
