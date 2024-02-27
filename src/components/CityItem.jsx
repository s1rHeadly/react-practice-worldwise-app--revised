
import styles from './CityItem.module.css';
import { formatDate } from '../../utils/helpers';


const CityItem = ({city}) => {
  
  const {cityName, country, date, emoji, id, position} = city;
  const formatttedDate = formatDate(date);


  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatttedDate}</time>
    </li>
  )
}

export default CityItem