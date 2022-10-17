import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import getProductAndCart from './components/Utilities/productAndCart';
import Main from './Layout/Main';

function App() {
  let router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {index:true,element:<Banner></Banner>},
        {path:'/home',element:<Banner></Banner>},
        {path:'shop',
        loader:getProductAndCart,
        element:<Shop></Shop>},
        {path:'orders',
        loader:getProductAndCart,
        element:<Orders></Orders>},
        {path:'inventory',element:<Inventory></Inventory>}
      ]
    }
  ])
  return (
    <div>
   <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
