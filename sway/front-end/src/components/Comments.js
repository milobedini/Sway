import axios from 'axios'
import { useState } from 'react'
import { getAxiosRequestConfig } from '../helpers/api'

const Comments = ({ id }) => {
  const [data, setData] = useState({
    text: '',
    article: parseInt(id),
  })

  const handleFormChange = async (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value,
    })
    console.log(data)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const config = getAxiosRequestConfig('/api/comments/', data)
    try {
      const res = await axios(config)
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
    window.location.reload()
  }
  const formInputProps = { data: data, handleFormChange }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="comment-textbox"
          name="text"
          type="text"
          value={data.text}
          onChange={handleFormChange}
          {...formInputProps}
        />
        <input
          type="submit"
          className="btn sub-comment"
          value="Submit comment"
        />
      </form>
    </div>
  )
}

export default Comments
