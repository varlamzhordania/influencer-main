import Advanced from '@/components/insightful/Advanced'
import Analysis from '@/components/insightful/Analysis'
import Authentic from '@/components/insightful/Authentic'
import Insightful from '@/components/insightful/Insightful'
import Reporting from '@/components/insightful/Reporting'
import SearchEng from '@/components/insightful/SearchEng'
import Agency from '@/components/insightful/agency'
import Ecommerce from '@/components/insightful/ecommerce'
import React from 'react'

const index = () => {
  return (
    <div>
      <Insightful />
      <Reporting />
      <Agency />
      <SearchEng />
      <Authentic />
      <Advanced />
      <Ecommerce />
      <Analysis />
    </div>
  )
}

export default index