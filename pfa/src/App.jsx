import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './App.scss'
import Header from './components/header/Header'
import Home from './pages/home/home'
import Dashboard from './pages/dashboard/Dashboard'

function App() {

  const Layout = () => {
    return (
      <div id='mainContainer'>
        <Header />
        <Outlet />

      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: [
        {
          path: "/",
          element: <Home /> 
        },
        {
          path: "/dashboard",
          element: <Dashboard /> 
        },
      ]
    },
  ]);
  
   
  

  return <RouterProvider router={router} />
}

export default App
