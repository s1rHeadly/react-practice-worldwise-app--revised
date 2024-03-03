

import styles from './CountriesList.module.css';
import Spinner from './Spinner';
import Message from './Message';
import CountryItem from './CountryItem';
import { useContext } from 'react';
import { CitiesContext } from '../context/CitiesContext';

const CountriesList = () => {


  const {cities, loading} = useContext(CitiesContext)

  if(loading){
    return <Spinner />
 }

 if(!cities.length){ // if cities are non existant
   return <Message message="No countries added"/>
 }


 const countries = [...new Set(cities)].map(elem => (
  {
    name: elem.country,
    emoji: elem.emoji
  } 
));





 return (
   <ul className={styles.countryList}>
     {
      countries?.map((country) => <CountryItem country={country} key={country.name}/>)
     }
   </ul>
 )
}

export default CountriesList