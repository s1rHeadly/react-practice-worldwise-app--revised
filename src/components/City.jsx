
import { useParams, useSearchParams} from "react-router-dom";
import { formatDate } from "../../utils/helpers";
import styles from './City.module.css'



const City = () => {


  // TEMP DATA
  const currentCity = {
    cityName: "Lisbon",
    emoji: "🇵🇹",
    date: "2027-10-31T15:59:59.138Z",
    notes: "My favorite city so far!",
  };

  const { cityName, emoji, date, notes } = currentCity;

 
  const {id} = useParams(); // get the id of url inside the template when a city Item is clicked
  // console.log(id)

  // use Search Params state
  const [searchParams, setSearch] = useSearchParams();
  const latQuery = searchParams.get('lat');
  const longQuery = searchParams.get('lng');
  // console.log('lat', latQuery)
  // console.log('lng', longQuery)



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