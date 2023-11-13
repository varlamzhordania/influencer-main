import Explore from '@/components/agency/Explore'
import ExploreService from '@/components/agency/ExploreService'
import Analysis from '@/components/agency/Analysis'
import Advanced from '@/components/agency/Advanced'
import Authentic from '@/components/agency/Authentic'
import SearchEng from '@/components/agency/SearchEng'
import Agency from '@/components/agency/agency'
import Ecommerce from '@/components/agency/ecommerce'
import React from 'react'

const index = () => {
  return (
    <div>
      <Explore />
      <ExploreService />
      <SearchEng />
      <Analysis />
      <Advanced />
      <Authentic />
      <Ecommerce />
      <Agency />
    </div>
  )
}

export default index