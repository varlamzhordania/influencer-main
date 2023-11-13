import Analyze from '@/components/foster/Analyze'
import Foster from '@/components/foster/Foster'
import Advanced from '@/components/foster/Advanced'
import Analysis from '@/components/foster/Analysis'
import Authentic from '@/components/foster/Authentic'
import SearchEng from '@/components/foster/SearchEng'
import Agency from '@/components/foster/agency'
import Ecommerce from '@/components/foster/ecommerce'
import React from 'react'

const index = () => {
  return (
    <div>
      <Foster />
      <Analyze />
      <SearchEng />
      <Advanced />
      <Ecommerce />
      <Analysis />
      <Authentic />
    </div>
  )
}

export default index