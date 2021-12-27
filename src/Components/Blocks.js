import React from 'react';
import './Blocks.css'

const Blocks = ({recipie}) => {
    return (
        <div className='divBlock'>
            <p>{recipie["recipe"]["label"]}</p>
            <img src={recipie["recipe"]["image"]}></img>
            <br/>
            <a href={recipie["recipe"]["uri"]}>Recipie</a> 
        </div>
    );
}

export default Blocks;


