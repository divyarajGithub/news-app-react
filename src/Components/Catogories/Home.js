import React from 'react'
import NewsCard from '../NewsCard'

function Home({cat}) {
  return (
    <div>
        <NewsCard cat={cat}/>
    </div>
  )
}

export default Home