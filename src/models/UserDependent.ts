import { EventRole } from './EventRole';

export interface UserDependent {
  name: string;
  eventRoles: EventRole[];
}
