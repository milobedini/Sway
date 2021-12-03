import { useState, useEffect } from 'react'
import axios from 'axios'
import ArticleCard from '../components/ArticleCard'

const Feed = () => {
  const [feed, setFeed] = useState([])

  useEffect(() => {
    const getFeed = async () => {
      const res = await axios.get('/api/feed/')
      console.log(res.data)
      setFeed(res.data)
    }
    getFeed()
  }, [])
  return (
    <div>
      <ul>
        {feed.map((article) => (
          <li key={article.id}>
            {<ArticleCard createdAt={article.created_at} {...article} />}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Feed
