import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h2>
        <i class='fas fa-futbol'></i>
        <span>Soccer</span> Database
      </h2>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/players'>Players</Link>
        </li>
        <li>
          <Link href='/teams'>Teams</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
