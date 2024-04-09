import './App.css'
import Navbar from './components/Navbar'
import Menubar from './components/Menubar'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Body from './components/body'
import { Provider } from 'react-redux'
import store from '../cart/store'
import Cart from './components/cart'
import { useState,useEffect } from 'react'


function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function getItemsList() {
    const data = await fetch('https://uxdlyqjm9i.execute-api.eu-west-1.amazonaws.com/s?category=all');
    const json = await data.json();
    setItems(json);
    setIsLoading(false);
  }

  useEffect(() => {
    getItemsList();
  }, []);


  return (
    <>
    
      <Provider store={store} >
        <BrowserRouter>
            <Navbar data={items} />
          <Routes>
            <Route path="/" element={
              <>
                <Menubar />
                <Body  items={items} isLoading={isLoading}/>
              </>
            } />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
      
    </>
  )
}

export default App