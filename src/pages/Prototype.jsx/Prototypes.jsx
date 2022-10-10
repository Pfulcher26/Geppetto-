import { useState, useEffect } from 'react';
// import styles from "./workshop.module.css";
import * as puppetsAPI from '../../utilities/puppets-api';
import PuppetEntry from '../../components/PuppetEntry/PuppetEntry';

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
            <h1>Prototypes</h1>
            <div>{puppetItem}</div>
        </>
    );
}