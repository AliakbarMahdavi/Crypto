import React from 'react';
import spinner from "../gif/spinner.gif"



const lodding = () => {
    return (
        <div>
            <img  style={{width:"300px", marginTop:"100px"}} src={spinner} alt="spinner"/>
            <h1>Lodding ...</h1>
        </div>
    );
};

export default lodding;