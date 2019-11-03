import React from 'react'

const Article = ({title= 'Article Title',
                   text= 'Lorem ipsum dolor sit amet'}) =>(

    <div className="article">
      <h3 className="article__header">{title}</h3>
      <div className="article__content">{text}</div>
    </div>
  )

export default Article
