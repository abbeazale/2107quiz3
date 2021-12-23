import type { NextPage } from 'next'
import {gql} from '@apollo/client';
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';


import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('')

  const router = useRouter();

  const toView = () => {
    router.push('/viewitems');
  };
  
  const addLaptop = () => {
    const options = {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({name: name, brand: brand, price: price })

    };

    const response = fetch('http://localhost:3000/api/laptop', options);
    console.log(response);

  }

  return (
    <div className={styles.container}>
      <h1>Add A Laptop</h1>
      <p>Name: <input type="text" onChange={(e) => setName(e.target.value)} id="name" name="name"></input></p>
      <p>Brand: <input type="text" onChange={(e) => setBrand(e.target.value)} id="brand" name="brand"></input> </p>
      <p>Price: <input type="text" onChange={(e) => setPrice(e.target.value)} id="price" name="price"></input> </p>
      <button type="button" onClick={addLaptop}>Add</button>
      <button type="button" onClick={toView}>View Items</button>
     
    </div>
  )
}


export default Home
