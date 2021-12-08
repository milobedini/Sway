import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import Comments from '../components/Comments'
import '../styles/article.scss'
import { getAxiosDeleteConfig } from '../helpers/api'
import { getUsername } from '../helpers/auth'
import { timeSince } from '../helpers/date'

const ArticleShow = () => {
  const [title, setTitle] = useState('')
  const [created, setCreated] = useState('')
  const [views, setViews] = useState(0)
  const [text, setText] = useState('')
  const [comments, setComments] = useState([])
  const [author, setAuthor] = useState('')
  const { id } = useParams()
  const currentUser = getUsername()
  const navigate = useNavigate()

  useEffect(() => {
    const getArticle = async (id) => {
      const res = await axios.get(`/api/feed/${id}`)
      console.log(res.data)
      setTitle(res.data.title)
      setCreated(res.data.created_at)
      setViews(res.data.views)
      console.log(views)
      setText(res.data.text)
      setAuthor(res.data.author)
      setComments(res.data.comments)
    }
    getArticle(id)
    // eslint-disable-next-line
  }, [id])

  const handleCommentDelete = async (commentId) => {
    console.log('deleting')
    try {
      const config = getAxiosDeleteConfig(`/api/comments/${commentId}/`)
      const res = await axios(config)
      console.log(res)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  const handlePostDelete = async () => {
    try {
      if (currentUser !== author.username) {
        throw new Error('This is not your post!')
      }
      const config = getAxiosDeleteConfig(`/api/feed/${id}/`)
      const res = await axios(config)
      console.log(res)
      navigate('/feed')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className="article-show">
        <h2>{title}</h2>
        {author.username === currentUser ? (
          <div className="edit-delete">
            <Link to={`/feed/${id}/edit`}>
              <button className="btn">Edit</button>
            </Link>
            <button className="btn" onClick={handlePostDelete}>
              Delete
            </button>
          </div>
        ) : null}
        <div>
          <p>
            Posted {timeSince(new Date(created))} ago by {author.username}
          </p>
          <p>{views} views</p>
        </div>
        <div>{text}</div>
      </div>
      <div className="comments">
        <h4>Comments ({comments.length})</h4>
        <div className="comment">
          <ul>
            {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <div>
                    <p>{comment.owner.username}</p>
                  </div>
                  <div>
                    <p>{comment.text}</p>
                  </div>
                  <div>
                    <p>{timeSince(new Date(comment.created_at))} ago</p>
                  </div>
                  <div>
                    {comment.owner.username === currentUser ? (
                      <button onClick={() => handleCommentDelete(comment.id)}>
                        Delete
                      </button>
                    ) : null}
                  </div>
                </li>
              )
            })}
            <div className="leave-comment">
              <Comments id={id} />
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ArticleShow
