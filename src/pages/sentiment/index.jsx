import Explore from '@/components/sentiment/Explore'
import ExploreService from '@/components/sentiment/ExploreService'
import Analysis from '@/components/sentiment/Analysis'
import Advanced from '@/components/sentiment/Advanced'
import Authentic from '@/components/sentiment/Authentic'
import SearchEng from '@/components/sentiment/SearchEng'
import Agency from '@/components/sentiment/agency'
import Ecommerce from '@/components/sentiment/ecommerce'
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