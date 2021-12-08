import React from 'react'
import { Link } from 'react-router-dom'
import { timeSince } from '../helpers/date'

const ArticleCard = ({ id, title, views, createdAt, author }) => {
  return (
    <div>
      <Link to={`/feed/${id}`}>
        <div>
          <h2>{title}</h2>
        </div>
      </Link>
      <div>
        <h4>{views} views</h4>
        <h4>
          Posted {timeSince(new Date(createdAt))} ago by {author.username}
        </h4>
      </div>
    </div>
  )
}

export default ArticleCard
