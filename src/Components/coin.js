import React from 'react';

// css
import styles from "./Coin.module.css";

const coin = ({name, image, symbol, price, marketCap, priceChange}) => {
    return (
        <div className={styles.container}>
            <img src={image} alt="img" className={styles.image}/>
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.currentPrice}>${price.toLocaleString()}</span>
            <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange}>{priceChange.toFixed(1)}%</span>
            <span className={styles.marketCap}>${marketCap.toLocaleString()}</span>
        </div>
    );
};

export default coin;    