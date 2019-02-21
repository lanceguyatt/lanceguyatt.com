import React from 'react'

import Default from '../layouts/Default'
import WorkBench from '../containers/WorkBench'
import { SEO, TitleBar } from '../components'

const WorkBenchPage = () => (
  <Default>
    <>
      <SEO title="Workbench" />
      <TitleBar />
      <WorkBench />
    </>
  </Default>
)

export default WorkBenchPage
