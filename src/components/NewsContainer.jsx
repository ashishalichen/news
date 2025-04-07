import React, { use, useEffect } from 'react'
import { API_KEY } from '../utils/constants'
import useTopHeadline from './hooks/useTopHeadlines'
import NewsCard from './NewsCard'

function NewsContainer() {

  const newsData = useTopHeadline()



  return (
    <div className="bg-neutral-900 rounded p-2 m-2 h-full flex flex-wrap justify-evenly w-5/6">
      {
        newsData.map((info, index) =>
          <NewsCard key={index} info={info} />
        )
      }
    </div>
  )
}

export default NewsContainer