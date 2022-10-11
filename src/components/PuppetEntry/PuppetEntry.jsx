import React from 'react'
import styles from "./puppet-entry.module.css";

export default function PuppetEntry({item, index}) {
    
    function deleteItem() {
    alert(item._id)
  }

  return (
    <>
    <div className={styles.entries} key={index}>
    <br></br><p><strong>{item.name}</strong></p>
        <p>{item.story}</p><br></br>
        <p>{item._id}</p>
        <button className={styles.delete} onClick={deleteItem}>Delete</button>
    </div> 
    </>
  )
}
