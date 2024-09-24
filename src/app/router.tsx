import { createBrowserRouter } from 'react-router-dom';
import AboutPage from 'pages/about';
import HomePage from 'pages/home';
import NoMatchPage from 'pages/no-match';
import PageLayout from 'shared/ui/layouts/page-layout';

const router = createBrowserRouter(
    [
        {
            element: <PageLayout />,
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
