import { ChurchEvent } from './../models/ChurchEvent';
import { api } from './utils/api';

export class EventService {

  static async listChurchEvents(): Promise<ChurchEvent[]> {
    const response =  await api.get('/church-events');
    return response.data;
  }

  static async deleteChurchEventById(id: string): Promise<any> {
    const response =  await api.delete(`/church-events/${id}`);
    return response.data;
  }

}
