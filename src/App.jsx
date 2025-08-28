import './App.css'
import LeftSide from './components/Sidebar/LeftSide'
import Layout from './layouts/Layout'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProjectSection from './pages/ProjectSection/ProjectSection'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        index: true,
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'projects',
        element:<ProjectSection/>
      },
      {
        path:'/*',
        element:<h1>Error Page</h1>
      }
    ]
  },

])

function App() {

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
