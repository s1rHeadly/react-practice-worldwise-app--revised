import { createContext, useState, useEffect } from "react";


import { BASE_URL } from "../../utils/helpers";


const CitiesContext = createContext();



function CitiesProvider({children}){

  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 // the current city state that we populate with the getCity Data
 // this gets passed to the city template 
  const [currentCity, setCurrentCity] = useState({}) 



  // get cities request
  useEffect(() => {

      const getCitiesData = async(url) => {
         setLoading(true)
          try {
            const response = await fetch(url)
            if(response.status === 200){
              const data  = await response.json();
              setCities(data);
            }
          }catch (error) {
            setLoading(true)
            setError(error)
          }finally{
            setLoading(false)
          }
        
      }
      getCitiesData(`${BASE_URL}/cities`)
  }, [])



  // get city function
    // this is the function we pass into the city component
    // NOte how we export it in the value too
    const getCity = async(id) => {
        setLoading(true)
         try {
           const response = await fetch(`${BASE_URL}/cities/${id}`)
           if(response.status === 200){
             const data  = await response.json();
            setCurrentCity(data);
           }
         }catch (error) {
           setLoading(true)
           setError(error)
         }finally{
           setLoading(false)
         }
     
    }




  return(
    <CitiesContext.Provider value={{
      cities: cities,
      loading: loading,
      error: error,
      currentCity: currentCity,
      setCurrentCity: setCurrentCity,
      getCity: getCity,
    }}>
      {children}
    </CitiesContext.Provider>
  )

}



export {CitiesContext, CitiesProvider}
