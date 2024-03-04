import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import styles from './Map.module.css';
import { CitiesContext } from '../context/CitiesContext';
// fix missing icon on the map
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

// pass this to the Marker component
const icon = L.icon({ 
  iconRetinaUrl:iconRetina, 
  iconUrl: iconMarker, 
  shadowUrl: iconShadow 
});



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


  const {cities} = useContext(CitiesContext)

  // use Navigate
  const navigate = useNavigate();

  // function for useNavigate
  function navigateToForm(){
     navigate('form')
  }


  const [mapPosition, setMapPosition] = useState([40, 0]);

  return (
    <div className={styles.mapContainer} onClick={navigateToForm}>
    <MapContainer center={mapPosition} zoom={5} scrollWheelZoom={true} className={styles.map}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />

      {cities?.map((city) => (
        <Marker position={[city.position.lat, city.position.lng]} icon={icon} key={city.id}>
        <Popup>
          <span>{city.emoji}</span>
          <span>{city.cityName}</span>
        </Popup>
      </Marker>
      ))}
  
</MapContainer>

    {/* <button onClick={changeSearchParams}>Update Query</button> */}
    </div>
  )
}

export default Map