import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from "./Pages/Home.jsx";
import AboutUs from "./Pages/AboutUS.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import ProductsServices from "./Pages/ProductsServices.jsx"
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WorldClocks from './components/WorldClocks.jsx';
import SingleProduct from './Pages/SingleProduct';

function App() {
  return (
    <>
    <main className="main">
      <Header/>
      
      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/contact' element={<ContactUs />}/>
        <Route path='/products-services' element={<ProductsServices />}/>
        <Route path='/product-page' element={<SingleProduct />}/>
      </Routes>

      <WorldClocks/>
      <Footer/>
    </main>
    </>
  );
}

export default App;
