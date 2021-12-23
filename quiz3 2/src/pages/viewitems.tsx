import type { NextPage } from "next";
import styles from '../styles/Home.module.css'
import { useState } from "react";


const ViewItems: NextPage = (props) => {

    const [input, setInput] = useState('');
    var dataName = [];
    const fetchData = () => {
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({searchInput: input})
        };

        const response = fetch('http://localhost:3000/api/laptop', options)
        .then(response => response.json()
        .then(data => dataName = data));

        console.log(response);
    }
    return (
        
        <div className={styles.container}>
          <h1>Search By Name</h1>
          <input onChange={(e) => setInput(e.target.value)} type="text" name="search" placeholder="search"></input>
          <button onClick={fetchData} type="button">Search</button>

        
        </div>

    )

}

export async function getServerSideProps(){
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      };
    const data = await fetch('http://localhost:3000/api/laptop', options);
    const laptops = await data.json();
  return {
    props: {
        laptops
    }
  }
}



export default ViewItems