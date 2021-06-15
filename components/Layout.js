import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Header from './Header'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.15.3/css/all.css'
          integrity='sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk'
          crossorigin='anonymous'
        ></link>
        <title>Soccer Database</title>
      </Head>
      <Navbar />
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
