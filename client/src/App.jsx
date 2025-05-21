import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Collections from './pages/Collection.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import Cart from './pages/Cart.jsx'
import Orders from './pages/Orders.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Contact from './pages/Contact.jsx'
import Product from './pages/Product.jsx'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'

function App() {

  // new changes

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <SearchBar />
      <Routes>
        <Route path='/'                   element={<Home/>}         />
        <Route path='/collections'        element={<Collections/>}  />
        <Route path='/about'              element={<About/>}        />
        <Route path='/contact'            element={<Contact/>}      />
        <Route path='/product/:productId' element={<Product/>}      />
        <Route path='/cart'               element={<Cart/>}         />
        <Route path='/login'              element={<Login/>}        />
        <Route path='/place-order'        element={<PlaceOrder/>}   />
        <Route path='/orders'             element={<Orders/>}       />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
