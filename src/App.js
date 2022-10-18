import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import ShippingPage from './components/ShippingPage/ShippingPage';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';
import getProductAndCart from './components/Utilities/productAndCart';
import Main from './Layout/Main';
import PrivateRoute from './routes/PrivateRoute';
// import Login from './components/signup'

function App() {
  const router=createBrowserRouter([
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
        {path:'inventory',element:<PrivateRoute><Inventory></Inventory></PrivateRoute>},
        {path:'/signup',element:<Signup></Signup>},
        {path:'login',element:<Login></Login>},
        {path:'/shipping',element:<PrivateRoute><ShippingPage></ShippingPage></PrivateRoute>}
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
