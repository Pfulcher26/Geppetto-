import { useState, useEffect } from 'react';
// import styles from "./workshop.module.css";
import { useNavigate } from 'react-router-dom';
import * as puppetsAPI from '../../utilities/puppets-api';
import PuppetEntry from '../../components/PuppetEntry/PuppetEntry';
import styles from "./prototype.module.css";

export default function Prototypes() {

    const navigate = useNavigate();
    const[puppetArray, setPuppetArray] = useState([]);

    useEffect(function () {
        async function getItems() {
            const items = await puppetsAPI.getAll();
            setPuppetArray(...puppetArray, items);
            }
        getItems();
    }, []);


    
    function deleteItem(item){
        puppetsAPI.deletePuppet(item);
        const updatePuppets = puppetArray.filter(function(puppet) {
            return puppet._id !== item._id;
            });
        setPuppetArray(...puppetArray, updatePuppets);
    }
    

    const puppetItem = puppetArray.map((value) => <PuppetEntry deleteItem={deleteItem} item={value} index={value._id} />);
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