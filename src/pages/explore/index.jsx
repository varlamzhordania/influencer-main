import Explore from '@/components/explore/Explore'
import ExploreService from '@/components/explore/ExploreService'
import Analysis from '@/components/explore/Analysis'
import Advanced from '@/components/explore/Advanced'
import Authentic from '@/components/explore/Authentic'
import SearchEng from '@/components/explore/SearchEng'
import Agency from '@/components/explore/agency'
import Ecommerce from '@/components/explore/ecommerce'
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