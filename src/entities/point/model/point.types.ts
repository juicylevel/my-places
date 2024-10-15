import { ActivityType } from 'entities/activity/model/activity-type';

export type Point = {
    id: string;
    coords: {
        lat: number;
        long: number;
    };
    name: string;
    desc: string;
    activityType: ActivityType;
};
