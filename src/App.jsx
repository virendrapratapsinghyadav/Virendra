import './App.css'
import LeftSide from './components/Sidebar/LeftSide'
import Layout from './layouts/Layout'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProjectSection from './pages/ProjectSection/ProjectSection'
import ProjectDetail from './components/ProjectDetails/ProjectDetail'
import DetailPage from './pages/DetailPage/DetailPage'
import Grid from './pages/Grid/Grid'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        index: true,
        element:<Grid/>
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
        path:'/project/:id',
        element:<DetailPage/>
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
