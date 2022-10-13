import { useState, useEffect } from 'react';
// import styles from "./workshop.module.css";
import * as puppetsAPI from '../../utilities/puppets-api';
import PuppetEntry from '../../components/PuppetEntry/PuppetEntry';
import styles from "./prototype.module.css";

export default function Prototypes() {
    // Sets the state as puppetArray, which will hold the puppets the user creates 
    const[puppetArray, setPuppetArray] = useState([]);
  

    // Gets all entries in the Puppet Collection via an AJAX request sent by the puppets API and sets the state to the response 
    useEffect(function () {
        async function getItems() { 
            const items = await puppetsAPI.getAll();
            setPuppetArray(...puppetArray, items);
            }
        getItems();
    }, []);


    const puppetItem = puppetArray.map((value) => <PuppetEntry puppetArray={puppetArray} setPuppetArray={setPuppetArray} item={value} key={value._id} index={value} />);
    return (
        <>
        <main className={styles.main}>
            <h1>Prototypes</h1>
            <img src="/images/prototype.jpg" className={styles.icon} />
            <div className={styles.entries}>{puppetItem}</div>
        </main>
        </>
    );
}