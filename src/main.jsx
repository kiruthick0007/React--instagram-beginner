import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import ViewStory from './Components/ViewStory.jsx'
import Profile from './Components/Profile.jsx'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>
    
    },

    {
      path:"/story/:id/:tot",
      element:<ViewStory/>
    },
    {
      path : "/profile" ,
      element : <Profile/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />


)

//cd db
//npx json-server --watch db.json --port 3000

//----
//npm run dev
