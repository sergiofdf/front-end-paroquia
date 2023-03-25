import { ChurchEvent } from './../models/ChurchEvent';
import { api } from './utils/api';

export class EventService {

  static async listChurchEvents(): Promise<ChurchEvent[]> {
    const response =  await api.get('/church-events');
    return response.data;
  }

}
