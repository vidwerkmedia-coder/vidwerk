import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import ShortPricing from './UI/ShortPricing';
import LongPricing from './UI/LongPricing';
import Layout from './Layout.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/* Default route = svp */}
      <Route index element={<LongPricing />} />
      <Route path='short' element={<ShortPricing />} />
      <Route path='/' element={<LongPricing />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
