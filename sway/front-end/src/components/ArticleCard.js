import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = ({ id, title, views, createdAt }) => {
  return (
    <div>
      <Link to={`/feed/${id}`}>
        <div>
          <h2>{title}</h2>
        </div>
      </Link>
      <div>
        <h4>{views} views</h4>
        <h4>Posted on {createdAt}</h4>
      </div>
    </div>
  )
}

export default ArticleCard
