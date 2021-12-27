import React from 'react';
import './inputData.css';

const Inputdata = (props) => {
    return (
        <form className='inputData' onSubmit={props.getData}>
            <input placeholder='enter item here' name="inputValue"></input>
            <button>Search</button>
        </form>
    );
}

export default Inputdata;
