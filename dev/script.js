import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import ListArticle from './components/ListArticle'
import PageTitle from './components/PageTitle'

export default class App extends Component{
  render() {
    return (
      <div className="container">
        <PageTitle/>
        <ListArticle/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
