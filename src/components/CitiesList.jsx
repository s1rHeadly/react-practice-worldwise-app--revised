import styles from './CitiesList.module.css';
import CityItem from './CityItem';
import Message from './Message';
import Spinner from './Spinner'
import { CitiesContext } from '../context/CitiesContext';
import { useContext } from 'react';

const CitiesList = () => {

  // use Context Cities 
  const {cities, loading} = useContext(CitiesContext)


  if(loading){
     return <Spinner />
  }

  if(!cities.length){ // if cities are non existant
    return <Message message="Please add a city"/>
  }

  return (
    <ul className={styles.cityList}>
      {
        cities?.map((city) => <CityItem city={city} key={city.id}/>)
      }
    </ul>
  )
}

export default CitiesList