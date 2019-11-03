import React, {useState} from 'react'

import Article from '../Article'

const ListArticle = (props) =>{
  const [offset, setOffset] = useState( 2);
  const step = 2;
  const [articles] = useState(props.articles);

  const loadArticles = () => {
    setOffset(offset+step)
  }
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
          articles.length > offset ? (
            <button type="button" className="button" onClick={loadArticles}>Show more</button>
          ): null
        }
      </>
    )

}
export default ListArticle
