import { UserRole } from './UserRole';
import { UserDependent } from './UserDependent';
import { EventRole } from './EventRole';

export interface User {
  _id: string;
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  eventRoles: EventRole[];
  role: UserRole;
  dependents: UserDependent[];
}
