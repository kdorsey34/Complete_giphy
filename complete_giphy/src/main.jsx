import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { ChakraProvider, Box, HStack} from "@chakra-ui/react";
import Trending from './pages/trending';
import Search from './pages/search';
import Random from './pages/random';
import Layout from './Pages/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
  
    {
      path: "trending",
      element: <Trending />
    },
    {
      path: "random",
      element: <Random />
    },
    {
      path: "search",
      element: <Search />
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ChakraProvider>
 <RouterProvider router={router} />
   </ChakraProvider>
  </React.StrictMode>,
);
