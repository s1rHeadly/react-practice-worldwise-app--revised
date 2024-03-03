
import { useParams} from "react-router-dom";
import { formatDate } from "../../utils/helpers";
import styles from './City.module.css'
import { CitiesContext } from "../context/CitiesContext";
import { useContext } from "react";
import { useEffect } from "react";
import Spinner from "./Spinner";



const City = () => {


  // // TEMP DATA
  // const currentCity = {
  //   cityName: "Lisbon",
  //   emoji: "🇵🇹",
  //   date: "2027-10-31T15:59:59.138Z",
  //   notes: "My favorite city so far!",
  // };

  const {id} = useParams(); // get the id of url inside the template when a city Item is clicked
  const {getCity, currentCity, loading} = useContext(CitiesContext) // get the getCity function from the context
  
  useEffect(() => {
      getCity(id)
  }, [id]);

  const { cityName, emoji, date, notes } = currentCity;

  if(loading) {
    return <Spinner />
  }

return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        {/* <ButtonBack /> */}
      </div>
    </div>
  );
}


export default City