

import { useSearchParams } from 'react-router-dom';
import styles from './CountryItem.module.css';

const CountryItem = ({country}) => {
  const {name, emoji} = country

  const x = useSearchParams();

  console.log(x)
  return (
    <li className={styles.countryItem}>
      <span>{emoji}</span>
      <span>{name}</span>
    </li>
  )
}

export default CountryItem