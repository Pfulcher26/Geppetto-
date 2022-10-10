import { useState, useEffect } from 'react';
// import styles from "./workshop.module.css";
import * as puppetsAPI from '../../utilities/puppets-api';
import PuppetEntry from '../../components/PuppetEntry/PuppetEntry';
import styles from "./prototype.module.css";

export default function Prototypes() {
    const[puppetArray, setPuppetArray] = useState([]);

    useEffect(function () {
        async function getItems() {
            const items = await puppetsAPI.getAll();
            setPuppetArray(items);
            }
        getItems();
    }, []);
    
    const puppetItem = puppetArray.map((value) => <PuppetEntry item={value} index={value._id} />);
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