
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainContext } from './Context/Context';

import './App.css';
import { ROUTES } from './router/router';

function App() {
  const router=createBrowserRouter(ROUTES)
  const [wishlistItem, SetwishlistItem] = useState([]);
  const datas = {
    wishlistItem,
    SetwishlistItem,
  };
  return (
    <div className="App">
      <MainContext.Provider value={datas}>
      <RouterProvider router={router}/>
      </MainContext.Provider>
    </div>
  );
}

export default App;
