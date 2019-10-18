import React, {Component} from 'react'

import Article from '../Article'

export default class ListArticle extends Component {
  constructor() {
    super()
    this.state = {
      offset: 2,
      step: 2,
      articles: [
        {title: "Article Title",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut, inventore iure magni, molestias numquam odio officiis omnis praesentium quibusdam reprehenderit tempore? Aliquam consequuntur corporis earum id, ipsam libero nesciunt quidem vero. Delectus dignissimos doloribus eos est ex exercitationem molestiae nobis numquam quam vel?"
        },
        {
          title: "Article Title 2",
          text: "Consectetur, corporis dolores ea error eum, facere illum, nam optio quo repellat ullam vitae voluptates."
        },
        {
          title: "Article title 3",
          text: "Accusantium adipisci animi culpa cum cumque cupiditate debitis delectus, dicta enim est expedita fuga ipsa iure nesciunt nisi omnis praesentium quaerat ratione repellat reprehenderit saepe sapiente veniam vitae."
        },
        {
          title: "Article title 4",
          text: "At atque dolorem doloribus illum, iure iusto modi molestiae numquam officiis optio suscipit?"
        },
        {
          title: "Article title 5",
          text: "Accusantium adipisci animi fuga ipsa iure nesciunt nisi omnis praesentium quaerat ratione repellat reprehenderit saepe sapiente veniam vitae."
        },
        {
          title: "Article title 6",
          text: "At atque, iure iusto modi molestiae numquam officiis optio suscipit?"
        }
      ]
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
            currentArticles.map((art, i)=>{
              return <Article key={i} title={art.title} text={art.text}/>
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
