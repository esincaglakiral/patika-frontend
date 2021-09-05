import React from 'react'
import 'cely-ui/dist/index.css'
import styles from './styles.module.css'

export const Button = (props) => {
  return <button {...props} className={`${styles.btn} ${styles[props.type]}`}>{props.text}</button>
}
