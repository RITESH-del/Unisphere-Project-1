import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import Root from "./routes/root.tsx";
import HomePage from './routes/LibraryAdminHome.tsx';


const router = createBrowserRouter([{
  path:"/",
  element: <Root />,
  children:[{index: true, element: <HomePage />,},
    
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
