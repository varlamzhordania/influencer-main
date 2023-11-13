import Analyze from '@/components/analyze/Analyze'
import Audience from '@/components/analyze/Audience'
import Authentic from '@/components/analyze/Authentic'
import Content from '@/components/analyze/Content'
import Fake from '@/components/analyze/Fake'
import Track from '@/components/analyze/Track'
import React from 'react'

const index = () => {
  return (
    <div>
        <Analyze/>
        <Authentic/>
        <Audience/>
        <Content/>
        <Fake/>
        <Track/>
    </div>
  )
}

export default index