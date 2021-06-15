import React from 'react'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>
        <span>Soccer</span> Database
      </h1>
      <p>Team and player soccer database</p>
    </div>
  )
}

export default Header
