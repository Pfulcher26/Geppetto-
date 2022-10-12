import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import styles from './homepage.module.css'

export default function Homepage() {
  return (
    <div className={styles.main}> 
        <h1>Welcome to Geppetto</h1>
        <span className={styles.description}><p>A website that utilizes the DaVinci 2 AI to let you wish upon a falling star.</p></span>
        <img className={styles.image} src="/images/awe.jpg"/>
    </div>
  )
}
