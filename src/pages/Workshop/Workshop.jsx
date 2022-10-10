import { useState } from 'react';
import styles from "./index.module.css";
import * as puppetsAPI from '../../utilities/puppets-api';

export default function Workshop() {
  const [puppetInput, setPuppetInput] = useState({name:"", personality:"", dream:""});
  const [result, setResult] = useState();


  async function onSubmit(event) {
    event.preventDefault();
    async function createPuppet(){
    const data = await puppetsAPI.createPuppet({puppetInput})
    setResult(data.result);
    setPuppetInput({name:"", personality:"", dream:""});
    }
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
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}