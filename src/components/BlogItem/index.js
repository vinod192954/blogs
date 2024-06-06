import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItem
  return (
    <Link to={`/blogs/${id}`}>
      <div className="blogs-container">
        <img src={imageUrl} alt={`item${id}`} className="image-custom" />
        <div>
          <div>
            <p>{topic}</p>
            <p>{title}</p>
          </div>
          <div className="author-container">
            <img
              src={avatarUrl}
              alt={`avatar${id}`}
              className="avatar-custom"
            />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
