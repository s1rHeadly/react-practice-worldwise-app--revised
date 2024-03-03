
import styles from './CityItem.module.css';
import { formatDate } from '../../utils/helpers';
import { Link} from 'react-router-dom';

const CityItem = ({city}) => {
  
  const {cityName, date, emoji, id, position} = city;
  const formatttedDate = formatDate(date);

const {lat: latitude, lng: longitude} = position; // pass the query into the Link


 

  return (
    <Link className={styles.cityItem} to={`${id}?lat=${latitude}&lng=${longitude}`}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatttedDate}</time>
    </Link>
  )
}

export default CityItem