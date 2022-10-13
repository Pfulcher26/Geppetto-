import React from 'react'
import { useState, useEffect } from 'react';
import styles from "./puppet-entry.module.css";
import * as puppetsAPI from '../../utilities/puppets-api';

export default function PuppetEntry({item, setPuppetArray, puppetArray }) {
    
    // handleDelete is triggered on button click, calls the deletePuppet function from puppetsAPI, deletes the current item, then updates state by filtering results based on id 
    async function handleDelete(){
      try {
          await puppetsAPI.deletePuppet({item});
          const updatePuppets = puppetArray.filter(puppet => puppet._id !== item._id);
          setPuppetArray(updatePuppets);
      } catch {
        console.log('error');
      }
  }
    
    // Displays the name property and story property of the puppet item, as well as a button that calls the handleDelete function
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
