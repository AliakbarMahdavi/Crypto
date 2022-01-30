import React, {useEffect, useState} from 'react';

// api
import { data } from '../api/api';
import axios from 'axios';

// components
import Lodding from './lodding';
import Coin from './coin';

// css
import styles from "./Landing.module.css";



const Landing = () => {
    
    const [coins, setCoins] = useState([])
    const [name, setName] = useState("")

    useEffect(() => {

        //method 1
        const ApiData = async () => {
            setCoins(await data());
        }
        ApiData()


        //method 2
        // const Url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"; 
        // axios.get(Url)
        //     .then(response => setCoins(response.data))

    }, [])


    const ChangeHandler = e => {
        setName(e.target.value);
    } 

    const Search = coins.filter(coin => coin.id.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
   

    return (
        <>
            <input className={styles.input} style={{marginTop:"100px"}} type="text" placeholder='Search' value={name} onChange={ChangeHandler} />
            {coins.length ? 
                        <div className={styles.coinContainer}>
                            {Search.map(coin =><Coin 
                                key={coin.id}  
                                name={coin.name}
                                image={coin.image}
                                symbol={coin.symbol}
                                price={coin.current_price}
                                marketCap={coin.market_cap}
                                priceChange={coin.price_change_percentage_24h} 
                            />)}
                        </div>
                    : <Lodding />}
        </>
    );
};

export default Landing;