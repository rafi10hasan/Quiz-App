
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz';

function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Topics></Topics>
        },
        {
          path: '/quiz/:quizid',
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizid}`),
          element:<Quiz></Quiz>
        },
        {
          path:'/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics></Statistics>
        },
       {
        path:'/blog',
        element:<Blog></Blog>
       }
      ]
    },

  ])
  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
