import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import styles from './homepage.module.css'

export default function Homepage() {
  return (
    <div className={styles.main}> 
        <h1>Welcome to Geppetto</h1>
        <span className={styles.description}><p>A website that utilizes the DaVinci 2 AI to let you wish upon a falling star.</p></span>
        <img className={styles.image} src="/images/awe.jpg"/>
        <p>AI is a powerful tool with boundless potential, as such it is important that we use it responsibly and with humanity.</p>
        <p>Users with any concerns, please feel free to contact us below:</p>
        <a href = "mailto: pfulcher26@gmail.com" className={styles.email}>Send Email</a>
    </div>
  )
}
