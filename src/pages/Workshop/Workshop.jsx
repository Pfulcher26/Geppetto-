import { useState } from 'react';
import styles from "./workshop.module.css";
import * as puppetsAPI from '../../utilities/puppets-api';

export default function Workshop() {
  const [puppetInput, setPuppetInput] = useState({name:"", personality:"", dream:"", story:""});
  // const [result, setResult] = useState();

  // calls the OpenAI Api sending the current state of puppetInput as a payload, then sets the story attribute
  // in state based on the response 
  async function createPuppet(){
    const data = await puppetsAPI.createPuppet({puppetInput})
    setPuppetInput({...puppetInput, story: data.result});
    }

  // saves a new puppet to the database and refreshes the page 
  function savePuppet(){
    puppetsAPI.savePuppet({puppetInput});
    refresh();
    }   

  // resets state
  function refresh(){
    setPuppetInput({name:"", personality:"", dream:"", story:""});
    }   

  // Calls the createPuppet function upon submission of the form 
  async function onSubmit(event) {
    event.preventDefault();
    createPuppet();
  }
  

  return (
    <div>
      <main className={styles.main}>
      <h3>Workshop</h3>
        <img src="/images/geppetto.jpg" className={styles.icon} />
        <form onSubmit={onSubmit}>
          <input
            autoFocus
            type="text"
            name="name"
            placeholder="Your puppet's name"
            value={puppetInput.name}
            onChange={(e) => setPuppetInput({...puppetInput, name: e.target.value})}
          />
          <input
            type="text"
            name="personality"
            placeholder="Your puppet's personality"
            value={puppetInput.personality}
            onChange={(e) => setPuppetInput({...puppetInput, personality: e.target.value})}
          />
          <input
            type="text"
            name="dream"
            placeholder="Your puppet's dream"
            value={puppetInput.dream}
            onChange={(e) => setPuppetInput({...puppetInput, dream: e.target.value})}
          />
          <input type="submit" value="Create" />
        </form>
        <div className={styles.result}>{puppetInput.story}</div>
        <div>
        <button className={styles.button} onClick={savePuppet}>save</button>
        <button className={styles.button} onClick={refresh}>refresh</button>
        </div>
      </main>
    </div>
  );
}