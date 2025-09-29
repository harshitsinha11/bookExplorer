import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import BooksPage from './components/BooksPage'
import Favorites from './components/Favorites'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='books' element={<BooksPage/>}/>
        <Route path='fav' element={<Favorites/>}/>
        <Route path='aboutus' element={<AboutUs/>}/>
      </Route>
    )
  )

  return (
   <RouterProvider router={router}/>
  )
}

export default App
