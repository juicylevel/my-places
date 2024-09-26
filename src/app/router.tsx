import { createBrowserRouter } from 'react-router-dom';
import PointsPage from 'pages/points';
import NoMatchPage from 'pages/no-match';
import PageLayout from 'shared/ui/layouts/page-layout';

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
