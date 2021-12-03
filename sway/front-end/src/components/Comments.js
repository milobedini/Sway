import axios from 'axios'
import { useState } from 'react'
import { getAxiosRequestConfig } from '../helpers/api'

const Comments = ({ id }) => {
  const [data, setData] = useState({
    text: '',
    article: parseInt(id),
  })

  const handleSubmit = async () => {
    const config = getAxiosRequestConfig('/api/comments/', data)
    try {
      const res = await axios(config)
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleFormChange = async (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value,
    })
    console.log(data)
  }
  const formInputProps = { data: data, handleFormChange }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="text"
          type="text"
          value={data.text}
          onChange={handleFormChange}
          {...formInputProps}
        />
        <input type="submit" value="Submit comment" />
      </form>
    </div>
  )
}

export default Comments
