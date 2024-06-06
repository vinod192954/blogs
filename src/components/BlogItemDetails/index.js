import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      imageUrl: data.image_url,
      topic: data.topic,
      title: data.title,
    }
    this.setState({blogsData: updatedData, isLoading: false})
  }

  renderBlogItems = () => {
    const {blogsData} = this.state
    const {id, author, avatarUrl, title, content, imageUrl, topic} = blogsData

    return (
      <div className="blog-container">
        <h1 className="heading">{title}</h1>
        <div className="author-container">
          <img src={avatarUrl} alt={author} className="author-image" />
          <p>{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-image" />
        <p>{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading, blogsData} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItems()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
