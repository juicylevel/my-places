import { createBrowserRouter } from 'react-router-dom';
import { PageLayout } from 'pages/page-layout';
import { PointsPage } from 'pages/points';
import { NoMatchPage } from 'pages/no-match';

const router = createBrowserRouter(
    [
        {
            element: <PageLayout />,
            children: [
                {
                    path: '/',
                    element: <PointsPage />,
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
