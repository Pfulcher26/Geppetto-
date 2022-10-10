import { useState } from 'react';
import styles from "./workshop.module.css";
import * as puppetsAPI from '../../utilities/puppets-api';

export default function Workshop() {
  const [puppetInput, setPuppetInput] = useState({name:"", personality:"", dream:"", story:""});
  // const [result, setResult] = useState();

  async function createPuppet(){
    const data = await puppetsAPI.createPuppet({puppetInput})
    setPuppetInput({...puppetInput, story: data.result});
    }

  async function savePuppet(){
    await puppetsAPI.savePuppet({puppetInput})
    }   

  async function refresh(){
    setPuppetInput({name:"", personality:"", dream:"", story:""})
    }   

  async function onSubmit(event) {
    event.preventDefault();
    createPuppet();
  }
  

  return (
    <div>
      <main className={styles.main}>
        <img src="/images/geppetto.jpg" className={styles.icon} />
        <h3>Create a Puppet</h3>
        <form onSubmit={onSubmit}>
          <input
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