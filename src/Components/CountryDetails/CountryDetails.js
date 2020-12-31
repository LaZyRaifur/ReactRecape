import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {countryName} = useParams();
    const [country,setCountry] = React.useState([]);
    const styleCountry = {
        border: '1px solid gold',
        margin: '20px',
        padding: '20px',
        borderRadius: '25px'
    }
 
//    console.log(countryName);
//     console.log(country[0]);
     React.useEffect(()=>{
        // const url = `https://restcountries.eu/rest/v2/all`;
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data));
    },[countryName])
    const history = useHistory();
    

   // console.log(country);
    return country.map(({capital,name,population,flag,nativeName,subregion,region}) =>
    (
        <div key={name} className="country" style={styleCountry}>
            <h3>Country Name: {name}</h3>
            <img src={flag} alt="flag"
            style={{height:"1rem",
        
            paddingLeft:"0.5rem"
        }}

            />
            <div>Capital :{capital}</div>
            <div>Region :{region}</div>
            <div>Population :{population}</div>
            <div>Native Name :{nativeName}</div>
            <div>Subregion :{subregion}</div>
            


            <button type="button" onClick={history.goBack}>Back</button>
        </div>
    ));
};

export default CountryDetails;