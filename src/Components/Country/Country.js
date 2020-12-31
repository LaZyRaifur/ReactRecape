import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const {name,capital} = props.country;
    const history = useHistory();

    const handleClick =(countryName) =>
    {
        const url = `/country/${countryName}`;
    history.push(url);
    }
    return (
        <div>
            <h2>Country Name : {name}</h2>
            <p><small>Capital : {capital}</small></p>
            <Link to={`/country/${name}`}>
                Show details
            </Link>
            <button onClick={()=> handleClick(name)}>Click Me</button>
        </div>
    );
};

export default Country;