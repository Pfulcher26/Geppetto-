import React from 'react'
import styles from "./puppet-entry.module.css";
import * as puppetsAPI from '../../utilities/puppets-api';

export default function PuppetEntry({item, index, deleteItem }) {
    
    function handleDelete() {
    deleteItem({item})   
}

  return (
    <>
    <div className={styles.entries} key={index}>
    <br></br><p><strong>{item.name}</strong></p>
        <p>{item.story}</p><br></br>
        <button className={styles.delete} onClick={handleDelete}>Remove</button>
    </div> 
    </>
  )
}
