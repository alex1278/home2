import React from 'react'
import styles from './style.scss'

const Article = ({title= 'Article Title',
                   text= 'Lorem ipsum dolor sit amet'}) =>(

    <div className={styles.article}>
      <h3 className={styles.article__header}>{title}</h3>
      <div className={styles.article__content}>{text}</div>
    </div>
  )

export default Article
