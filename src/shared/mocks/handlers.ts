import { ActivityType } from 'entities/activity/model/activity-type';
import { Point } from 'entities/point';
import { http, HttpResponse, delay } from 'msw';

const points = new Map<string, Point>();
points.set('point1', {
    id: 'point1',
    coords: { lat: 59, long: 59 },
    name: 'Озеро Глухое',
    desc: 'Небольшое озеро, расположенное недалеко от Сестрорецка. Основные обитатели - окуни.',
    activityType: ActivityType.FISHING,
});
points.set('point2', {
    id: 'point2',
    coords: { lat: 60, long: 60 },
    name: 'Озеро Белянское',
    desc: 'Озеро рядом с деревней Тарасовское',
    activityType: ActivityType.FISHING,
});

export const handlers = [
    http.get('/points', () => {
        return HttpResponse.json<Point[]>(Array.from(points.values()));
    }),
    http.post('/points', async ({ request }) => {
        await delay();
        const payload = (await request.json()) as object;
        const id = `point${points.size + 1}`;
        const newPoint = { id, ...payload } as Point;
        points.set(id, newPoint);
        return HttpResponse.json<Point>(newPoint);
    }),
    http.put('/points/:id', async ({ params, request }) => {
        await delay();
        const payload = (await request.json()) as object;
        const id = params?.id as string;
        const updatedPoint = { ...points.get(id), ...payload } as Point;
        points.set(id, updatedPoint);
        return HttpResponse.json<Point>(updatedPoint);
    }),
    http.delete('/points/:id', async ({ params }) => {
        await delay();
        const id = params?.id as string;
        const deletedPoint = points.get(id);
        if (!deletedPoint) {
            return new HttpResponse(null, { status: 404 });
        }
        points.delete(id);
        return HttpResponse.json(deletedPoint);
    }),
];
