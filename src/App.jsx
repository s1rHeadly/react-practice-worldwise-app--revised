import {Routes, Route, Navigate} from 'react-router-dom';
import { useState, useEffect} from 'react';

import AppLayout from './components/AppLayout';
import Homepage from './pages/Homepage';
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import CitiesList from './components/CitiesList'
import CountriesLlist from './components/CountriesList';
import City from './components/City';
import Form from './components/Form'
import PageNotFound from './pages/PageNotFound'

// context
import { CitiesProvider } from './context/CitiesContext';

import { BASE_URL } from '../utils/helpers';

function App() {

  //  THIS PART IS NOW IN A CONTEXT
  //======================================
  // const [cities, setCities] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);


  // useEffect(() => {

  //     const getCitiesData = async(url) => {
  //        setLoading(true)
  //         try {
  //           const response = await fetch(url)
  //           if(response.status === 200){
  //             const data  = await response.json();
  //             setCities(data);
  //           }
  //         }catch (error) {
  //           setLoading(true)
  //           setError(error)
  //         }finally{
  //           setLoading(false)
  //         }
        
  //     }
  //  getCitiesData(`${BASE_URL}/cities`)
  // }, [])


  

  return (
    <CitiesProvider>
    <Routes>
      {/* index lets the route know that this is the default component */}
      <Route index element={<Homepage />} />
      <Route path="/app" element={<AppLayout />}>
            {/* Nested app Routes */}
            <Route index element={<Navigate replace to="cities"/>} /> 
            <Route path="cities" element={<CitiesList />}/>
            <Route path="cities/:id" element={<City />}/>
            <Route path="countries" element={<CountriesLlist />}/>
            <Route path="form" element={<Form />}/>
            
      </Route>

      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </CitiesProvider>
  )
}

export default App







