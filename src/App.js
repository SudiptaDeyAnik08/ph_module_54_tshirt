import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Orders from './components/Orders/Orders';
import About from './components/About/About';

function App() {
  const router = createBrowserRouter([

    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:async()=>{
            return fetch('tshirts.json')
          },
          element:<Home></Home>
        },
        {
          path:'/Orders',
          element:<Orders></Orders>  
        },
        {
          path:'/About',
          element:<About></About>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>  
    </div>
  );
}

export default App;
