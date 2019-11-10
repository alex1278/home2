import React, {useState} from 'react'
import style from './style.scss'

import Article from '../Article'
import Button from '../Button'

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
        <div className={style.articles}>
          {
            currentArticles.map((art)=>{
              return <Article key={art.id} title={art.title} text={art.text}/>
            })
          }

        </div>
        {
          articles.length > offset ? (
            <Button className="button" onClick={loadArticles}>Show More</Button>
          ): null
        }
      </>
    )

}
export default ListArticle
