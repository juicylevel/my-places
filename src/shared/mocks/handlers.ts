import { Point } from 'entities/point';
import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('/points', () => {
        return HttpResponse.json<Point[]>([
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
        ]);
    }),
];
