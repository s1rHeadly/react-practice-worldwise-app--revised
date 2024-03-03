import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import styles from './Map.module.css';




const Map = () => {

  const {id} = useParams(); // get the id of url inside the template when a city Item is clicked

  // use Search Params state
  const [searchParams,setSearch]= useSearchParams();

  // get the query values from the url of the city we clicked on
  const latQuery = searchParams.get('lat');
  const longQuery = searchParams.get('lng');

  // console.log('lat', latQuery)
  // console.log('lng', longQuery)

  // function changeSearchParams(){
  //   setSearch((prevState) => ({
  //     ...prevState, // Spread the previous state to keep other properties
  //     lat: 20, // Update lng property
  //     lng: 20,
  //   }));
  // }


  // use Navigate
  const navigate = useNavigate();

  // function for useNavigate
  function navigateToForm(){
     navigate('form')
  }


  return (
    <div className={styles.mapContainer} onClick={navigateToForm}>
    <h1>Map</h1>
    <span>Latitude: {latQuery}</span>
    <span>Longitude: {longQuery}</span>
    <span>ID: {id}</span>

    {/* <button onClick={changeSearchParams}>Update Query</button> */}
    </div>
  )
}

export default Map