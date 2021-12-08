import { useState, useEffect } from 'react'
import axios from 'axios'
import ArticleCard from '../components/ArticleCard'
import '../styles/feed.scss'
import { Link } from 'react-router-dom'
import { FcPlus } from 'react-icons/fc'
import FilterButton from '../components/FilterButton'

const filterMap = {
  All: () => true,
  Article: (post) => post.category.includes('Article'),
  Thread: (post) => post.category.includes('Thread'),
}
const filterNames = Object.keys(filterMap)

const Feed = () => {
  const [feed, setFeed] = useState([])
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const getFeed = async () => {
      const res = await axios.get('/api/feed/')
      console.log(res.data)
      setFeed(res.data)
    }
    getFeed()
  }, [])

  const filterList = filterNames.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ))

  const postList = feed
    .filter(filterMap[filter])
    .map((post) => (
      <li key={post.id}>
        {<ArticleCard createdAt={post.created_at} {...post} />}
      </li>
    ))

  return (
    <div className="feed">
      <div className="feed-heading">
        <h2>Feed</h2>
        <p>Check out our community forum and much more.</p>
      </div>
      <div className="start-thread">
        <Link to="/feed/new/">
          <button className="btn">
            <FcPlus size="2.2rem" />
          </button>
        </Link>
      </div>
      <div className="categories">
        <h5>Choose a Category:</h5>
        <ul>{filterList}</ul>
      </div>
      <div className="post-list">
        <ul>{postList}</ul>
      </div>
    </div>
  )
}

export default Feed
