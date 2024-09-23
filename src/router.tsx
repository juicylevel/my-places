import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AboutPage from 'pages/about';
import HomePage from 'pages/home';

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/about',
                element: <AboutPage />,
            },
        ],
    },
]);

export default router;
