import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [

      ]
    },
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;