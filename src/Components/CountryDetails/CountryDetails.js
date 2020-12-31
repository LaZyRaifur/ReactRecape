import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {countryName} = useParams();
    const [country,setCountry] = useState([]);

    useEffect(()=>{
        // const url = `https://restcountries.eu/rest/v2/all`;
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data));
    },[countryName])
    console.log(country);
    return (
        <div>
            <h3>This is  {countryName}</h3>
            <h2>{country.capital}</h2>
        </div>
    );
};

export default CountryDetails;