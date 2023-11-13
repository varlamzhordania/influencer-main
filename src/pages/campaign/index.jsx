import React from 'react'
import Campaign from "@/components/campaign/Campaign"
import Streamline from '@/components/campaign/Streamline'
import Analysis from '@/components/campaign/Analysis'
import Advanced from '@/components/campaign/Advanced'
import Authentic from '@/components/campaign/Authentic'
import SearchEng from '@/components/campaign/SearchEng'
import Agency from '@/components/campaign/agency'
import Ecommerce from '@/components/campaign/ecommerce'
const index = () => {
  return (
    <div>
      <Campaign />
      <Streamline />
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