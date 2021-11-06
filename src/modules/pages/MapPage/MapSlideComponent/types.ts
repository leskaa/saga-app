export interface MapSlideComponentProps {
    unit: Unit;
};

export interface Unit {
    id: string;
    name: string;
    description: string;
    courseId: number;
    mapId: number;
};