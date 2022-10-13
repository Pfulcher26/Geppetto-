import React from 'react'
import { useState, useEffect } from 'react';
import styles from "./puppet-entry.module.css";
import * as puppetsAPI from '../../utilities/puppets-api';

export default function PuppetEntry({item, setPuppetArray, puppetArray }) {
    
    // handleDelete is triggered on button click, calls the deleteItem function that has been passed down as a prop from Prototypes.jsx
    // and passes the value of the item prop, which corresponds to an individual puppet element in the user array 
    async function handleDelete(){
      try {
          await puppetsAPI.deletePuppet({item});
          const updatePuppets = puppetArray.filter(puppet => puppet._id !== item._id);
          setPuppetArray(updatePuppets);
      } catch {
        console.log('error');
      }
  }
    
    // Displays the name property of the puppet item, as well as the story and a button to handle deleting the item 
  return (
    <>
    <div className={styles.entries} >
    <br></br><p><strong>{item.name}</strong></p>
        <p>{item.story}</p><br></br>
        <button className={styles.delete} onClick={handleDelete}>Remove</button>
    </div> 
    </>
  )
}
