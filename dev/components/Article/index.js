import React, {Component} from 'react'

export default class Article extends Component {
  render() {
    const {title, text} = this.props
    return(
      <div className="article">
        <h3 className="article__header">{title}</h3>
        <div className="article__content">{text}</div>
      </div>
    )
  }
}

Article.defaultProps = {
  title: 'Article Title',
  text: 'Lorem ipsum dolor sit amet'
}
