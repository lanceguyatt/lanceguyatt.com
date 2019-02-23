import React from 'react'

import WorkBench from '../layouts/WorkBench'
import { WorkBench as WB } from '../containers'
import { SEO } from '../components'

const WorkBenchPage = () => (
  <WorkBench>
    <>
      <SEO title="Workbench" />
      <WB active />
    </>
  </WorkBench>
)

export default WorkBenchPage
