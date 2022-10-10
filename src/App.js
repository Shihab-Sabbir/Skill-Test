import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import QuizScript from './components/QuizScript/QuizScript';
import Layout from './Layout/Layout';
import './App.css'
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        {
          path: '/', loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }, element: <Home />
        },
        {
          path: ':name/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <QuizScript />
        },
        {
          path: 'statistics', loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }, element: <Statistics />
        },
        {
          path: 'blog', element: <Blog />
        }
      ]
    },
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;