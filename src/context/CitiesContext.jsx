import { createContext, useState, useEffect } from "react";


import { BASE_URL } from "../../utils/helpers";


const CitiesContext = createContext();



function CitiesProvider({children}){

  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


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



  return(
    <CitiesContext.Provider value={{
      cities: cities,
      loading: loading,
      error: error,
    }}>
      {children}
    </CitiesContext.Provider>
  )

}



export {CitiesContext, CitiesProvider}
