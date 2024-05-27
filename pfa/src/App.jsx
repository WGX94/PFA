import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import './App.scss';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Write from "./pages/simulation/Write";
import Read from './components/Read';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import UpdateWrite from "./components/UpdateWrite";
import UpdateRead from "./components/UpdateRead";
import { AuthProvider } from "./components/contexts/authContext";

function AppRoutes() {
  const routesArray = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/Dashboard",
      element: <Dashboard />,
    },
    {
      path: "/write",
      element: <Write />,
    },
    {
      path: "/read",
      element: <Read />,
    },
    {
      path: "/updatewrite/:firebaseId",
      element: <UpdateWrite />,
    },
    {
      path: "/updateread",
      element: <UpdateRead />,
    },
  ];

  return useRoutes(routesArray);
}

function App() {
  return (
    <AuthProvider>
      <Router>
          <Header />
          <AppRoutes />       
      </Router>
    </AuthProvider>
  );
}

export default App;