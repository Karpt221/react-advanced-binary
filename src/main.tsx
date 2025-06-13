import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import RouterProvider from './components/router-provider/router-provider';
import appRoutes from './components/routes/routes';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider routes={appRoutes} />
    </StrictMode>
);
