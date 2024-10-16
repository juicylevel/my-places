import { ActivityType } from 'entities/activity/model/activity-type';

export type CreatePointValues = {
    coords: {
        lat: number;
        long: number;
    };
    name: string;
    desc: string;
    activityType: ActivityType;
};

export type UpdatePointValues = CreatePointValues;

export type Point = CreatePointValues & {
    id: string;
    createdAt: string;
};
