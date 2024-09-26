import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import Login from './components/Login/Login';
import Register from './components/Login/Register/Register';
import AddSpot from './assets/Client/AddSpot/AddSpot';
import AllSpots from './components/AllSpots/AllSpots';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRoute from './assets/PrivateRoute/PrivateRoute';
import MatchCountry from './components/MatchCountry/MatchCountry';
import SpotDetails from './components/AllSpots/SpotDetails';
import Error from './components/About/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('https://tourism-server10.vercel.app/place')
      },
      {
        path:'/users',
        element:<Users></Users>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/addSpot',
        element:<PrivateRoute><AddSpot></AddSpot></PrivateRoute>
      },
      {
        path:'/allSpots',
        element:<AllSpots></AllSpots>,
        loader: ()=> fetch('https://tourism-server10.vercel.app/place')
      },
      {
        path:'/matchCountry/:id',
        element:<MatchCountry></MatchCountry>,
        loader:()=> fetch('https://tourism-server10.vercel.app/place')
      },
      {
        path:'/spotDetails/:id',
        element:<PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
        loader: ()=> fetch('https://tourism-server10.vercel.app/place')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
