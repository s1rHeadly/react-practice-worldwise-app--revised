
import styles from './CityItem.module.css';
import { formatDate } from '../../utils/helpers';
import { Link} from 'react-router-dom';
import { useContext } from 'react';
import { CitiesContext } from '../context/CitiesContext';

const CityItem = ({city}) => {


  
  const {cityName, date, emoji, id, position} = city;
  const formatttedDate = formatDate(date);

  const {lat: latitude, lng: longitude} = position; // pass the query into the Link

  const {currentCity} = useContext(CitiesContext)
 

  return (
    <Link 
    to={`${id}?lat=${latitude}&lng=${longitude}`}
    className={`${styles.cityItem} ${id === currentCity.id && styles['cityItem--active']}`} >
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatttedDate}</time>
    </Link>
  )
}

export default CityItem