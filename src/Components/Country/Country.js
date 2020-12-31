import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const {name,capital} = props.country;
    const history = useHistory();

    const handleClick =(countryName) =>
    {
        const url = `${countryName}`;
    history.push(url);
    }
    const style = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'

    }
    return (
        <div style={style}>
            <h2>Country Name : {name}</h2>
            <p><small>Capital : {capital}</small></p>
            <Link to={`/${name}`}>
                Show details
            </Link>
            <button onClick={()=> handleClick(name)}>Click Me</button>
        </div>
    );
};

export default Country;