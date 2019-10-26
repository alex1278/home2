import React, {Component} from 'react'

import Article from '../Article'

export default class ListArticle extends Component {
  constructor(props) {
    super()
    this.state = {
      offset: 2,
      step: 2,
      articles: props.articles
    }
    this.loadArticles = this.loadArticles.bind(this)
  }
  loadArticles() {
    const {offset, step} = this.state

    this.setState({
      offset: offset+step
    })
  }

  render() {
    const {articles, offset} = this.state;
    const currentArticles = articles.slice(0, offset);

    return(
      <>
        <div className="articles">
          {
            currentArticles.map((art)=>{
              return <Article key={art.id} title={art.title} text={art.text}/>
            })
          }

        </div>
        {
          articles.length > this.state.offset ? (
            <button type="button" className="button" onClick={this.loadArticles}>Show more</button>
          ): null
        }
      </>
    )
  }
}
