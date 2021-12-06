import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Comments from '../components/Comments'
import '../styles/article.scss'

const ArticleShow = () => {
  const [title, setTitle] = useState('')
  const [created, setCreated] = useState('')
  const [views, setViews] = useState()
  const [text, setText] = useState('')
  const [comments, setComments] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getArticle = async (id) => {
      const res = await axios.get(`/api/feed/${id}`)
      console.log(res.data)
      setTitle(res.data.title)
      setCreated(res.data.created_at)
      setViews(res.data.views)
      setText(res.data.text)
      setComments(res.data.comments)
    }
    getArticle(id)
  }, [id])

  return (
    <>
      <div className="article-show">
        <h2>{title}</h2>
        <div>
          <p>Posted on {created}</p>
          <p>{views} views</p>
        </div>
        <div>{text}</div>
      </div>
      <div className="leave-comment">
        <Comments id={id} />
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
                    <p>{comment.created_at}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default ArticleShow
