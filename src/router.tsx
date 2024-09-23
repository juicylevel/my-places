import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AboutPage from 'pages/about';
import HomePage from 'pages/home';
import NoMatchPage from 'pages/no-match';

const router = createBrowserRouter(
    [
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
                {
                    path: '*',
                    element: <NoMatchPage />,
                },
            ],
        },
    ],
    {
        basename: import.meta.env.BASE_URL,
    }
);

export default router;
