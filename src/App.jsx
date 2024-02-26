import {Routes, Route, Navigate} from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Homepage from './pages/Homepage';
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import CitiesList from './components/CitiesList'
import CountriesLlist from './components/CountriesList';
import Form from './components/Form'
import PageNotFound from './pages/PageNotFound'


import { BASE_URL } from '../utils/helpers';

function App() {

  console.log(BASE_URL)

  return (
    <>
    <Routes>
      {/* index lets the route know that this is the default component */}
      <Route index element={<Homepage />} />
      <Route path="/app" element={<AppLayout />}>
            {/* Nested app Routes */}
            <Route index element={<Navigate replace to="cities"/>} /> 
            <Route path="cities" element={<CitiesList/>}/>
            <Route path="countries" element={<CountriesLlist/>}/>
            <Route path="form" element={<Form />}/>
            
      </Route>

      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </>
  )
}

export default App







