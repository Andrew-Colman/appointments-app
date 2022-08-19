export type Appointment = {
    title: string;
    description?: string;
    status: 'created' | 'done' | 'cancelled';
    createdAt?: 'string';
    start: string;
    end: string;
};
