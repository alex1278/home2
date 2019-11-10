import React from 'react'

import styles from './style.scss'

const Button = (props) => {
  let clsName = styles.button
  if(props.cls) {
    clsName = clsName +` ${styles[props.cls]}`
  }

  return (
    <button type={props.type || 'button'} className={clsName} onClick={props.onClick}>{props.children}</button>
  )
}
export default Button
