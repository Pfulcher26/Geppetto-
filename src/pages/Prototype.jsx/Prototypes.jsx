import { useState, useEffect } from 'react';
// import styles from "./workshop.module.css";
import * as puppetsAPI from '../../utilities/puppets-api';

export default function Prototypes() {
    const[puppetCloset, setPuppetCloset] = useState([]);

    useEffect(function () {
        async function getItems() {
            const items = await puppetsAPI.getAll();
            setPuppetCloset(items);
            }
        getItems();
    }, []);

    return (
        <>
            <h1>Prototypes</h1>
            <div>{puppetCloset[0].dream}</div>
        </>
    );
}