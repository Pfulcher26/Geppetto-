import React from 'react'
import styles from "./puppet-entry.module.css";

export default function PuppetEntry({item, index}) {
  return (
    <>
    <div key={index}>
        <div className={styles.entries}>
    <br></br><p><strong>{item.name}</strong></p>
        <p>{item.story}</p><br></br>
    </div>
    </div>
    </>
  )
}
