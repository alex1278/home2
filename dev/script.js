import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import ListArticle from './components/ListArticle'
import PageTitle from './components/PageTitle'
import Form from './components/Form'

export default class App extends Component{


  constructor() {
    super()
    this.state = {
      articles: [
        {
          id:12,
          title: "Article Title",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut, inventore iure magni, molestias numquam odio officiis omnis praesentium quibusdam reprehenderit tempore? Aliquam consequuntur corporis earum id, ipsam libero nesciunt quidem vero. Delectus dignissimos doloribus eos est ex exercitationem molestiae nobis numquam quam vel?"
        },
        {
          id: 13,
          title: "Article Title 2",
          text: "Consectetur, corporis dolores ea error eum, facere illum, nam optio quo repellat ullam vitae voluptates."
        },
        {
          id: 14,
          title: "Article title 3",
          text: "Accusantium adipisci animi culpa cum cumque cupiditate debitis delectus, dicta enim est expedita fuga ipsa iure nesciunt nisi omnis praesentium quaerat ratione repellat reprehenderit saepe sapiente veniam vitae."
        },
        {
          id: 15,
          title: "Article title 4",
          text: "At atque dolorem doloribus illum, iure iusto modi molestiae numquam officiis optio suscipit?"
        },
        {
          id: 16,
          title: "Article title 5",
          text: "Accusantium adipisci animi fuga ipsa iure nesciunt nisi omnis praesentium quaerat ratione repellat reprehenderit saepe sapiente veniam vitae."
        },
        {
          id: 17,
          title: "Article title 6",
          text: "At atque, iure iusto modi molestiae numquam officiis optio suscipit?"
        }
      ]
    };
    this.createNew = this.createNew.bind(this)
  }
  createNew(item) {
    const {articles} = this.state
    console.log('create: ',item, articles,)
    this.setState({
      articles: [item, ...articles]
    })

    let newItems
    let storedItems = localStorage.getItem('newArticles');
    if(storedItems) {
      let updatedStore = JSON.parse(storedItems)
      newItems = [item, ...updatedStore]
    } else {
      newItems = [item]
    }
    localStorage.setItem('newArticles', JSON.stringify(newItems))
  }
  render() {
    let {articles} = this.state
    let storedItems = JSON.parse(localStorage.getItem('newArticles'));
    if(storedItems){
      articles = articles.concat(storedItems)
    }
    console.log('articles: ',articles)
    return (
      <div className="container">
        <PageTitle title='Articles'/>
        <ListArticle articles={articles}/>
        <Form addNewProp={this.createNew}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
