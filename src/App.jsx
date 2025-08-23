import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/home/home.jsx'
import NotFoundPage from './Components/notFoundPage/notFoundPage.jsx'
import Login from './Components/login/login.jsx'
import Register from './Components/register/register.jsx'
import Layout   from './Components/layout/layout.jsx'        
import { Toaster } from 'react-hot-toast'

function App() {
const router =  createBrowserRouter([
{path : "" , element : <Layout /> , children : [
  {index : true , element : <Home />},
  {path : "home" , element : <Home />},
  {path : "register" , element : <Register />},
  {path : "login" , element : <Login />},
  {path : "*" , element : <NotFoundPage />},


]}
])



  return (
    <>
    <Toaster />
      <RouterProvider router={router} />
    </>
  )
}

export default App
