

import styles from './CountryItem.module.css';

const CountryItem = ({country}) => {
  const {name, emoji} = country
  return (
    <li className={styles.countryItem}>
      <span>{emoji}</span>
      <span>{name}</span>
    </li>
  )
}

export default CountryItem