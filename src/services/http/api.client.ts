import { HttpClientBase } from './http.base';
import { Appointment } from '@features/appointment/appointment.types';

export const API_BASE_URL = '/api';

class ApiRoutes extends HttpClientBase {
    public constructor(baseUrl: string) {
        super(baseUrl);
    }

    /**get all user appointments */
    public getAppointments = () => this.instance.get('/appointment/all');
    public createAppointment = (data: Appointment) =>
        this.instance.post('/appointment/', { appointment: data });
    public updateAppointment = (id: string, data: Appointment) =>
        this.instance.put(`/appointment/${id}`, { appointment: data });
    public deleteAppointment = (id: string) =>
        this.instance.delete(`/appointment/${id}`);
}

const api = new ApiRoutes(API_BASE_URL);

export default api;
