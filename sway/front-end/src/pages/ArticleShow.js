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
    <div className="article-show">
      <div className="top-article">
        <div className="edit-delete">
          {author.username === currentUser ? (
            <>
              <h2>{title}</h2>
              <Link to={`/feed/${id}/edit`}>
                <button className="btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="#18cdba"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </Link>
              <button className="btn" onClick={handlePostDelete}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="#18cdba"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </>
          ) : (
            <h2>{title}</h2>
          )}
        </div>
        <div>{text}</div>
        <div className="time-views">
          <p>
            Posted {timeSince(new Date(created))} ago by {author.username}
          </p>
          <p>{views} views</p>
        </div>
      </div>

      <div className="comments">
        <h4>Replies ({comments.length})</h4>
        <div className="comment">
          <ul className>
            {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <div className="comment-body">
                    <div className="comment-username">
                      <p>{comment.owner.username}</p>
                    </div>
                    <div className="comment-text">
                      <p>
                        {comment.text}{' '}
                        {comment.owner.username === currentUser ? (
                          <button
                            className="btn comment-del"
                            onClick={() => handleCommentDelete(comment.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="#f45b69"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        ) : null}
                      </p>
                    </div>
                    <div className="comment-time">
                      <p>{timeSince(new Date(comment.created_at))} ago</p>
                    </div>
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
    </div>
  )
}

export default ArticleShow
