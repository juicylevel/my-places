import { Point } from 'entities/point';
import { http, HttpResponse, delay } from 'msw';

let points: Point[] = [
    {
        id: 'point1',
        coords: [0, 0],
        name: 'Озеро Глухое',
        desc: 'Небольшое озеро, расположенное недалеко от Сестрорецка. Основные обитатели - окуни.',
    },
    {
        id: 'point2',
        coords: [1, 1],
        name: 'Озеро Белянское',
        desc: 'Озеро рядом с деревней Тарасовское',
    },
];

export const handlers = [
    http.get('/points', () => {
        return HttpResponse.json<Point[]>(points);
    }),
    http.delete('/points/:id', async ({ params: { id } }) => {
        await delay();
        points = points.filter((point) => point.id !== id);
        return HttpResponse.json({ deleted: true });
        // return HttpResponse.error();
    }),
];
