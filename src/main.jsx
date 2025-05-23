import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './routes/Routes'
import './index.css'
import axios from 'axios';
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Authontication/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

axios.defaults.withCredentials = true;



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
