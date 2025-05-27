export interface Session {
  name: string;
  _id: string;
  token: string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id?: string;
}

export interface Entertainer {
  firstName: string;
  lastName: string;
  occupation: string;
  _id: string;
}

export interface Event {
  price: number;
  method: string;
  entertainer: Entertainer | string;
  organizer: User | string;
  lat: number;
  lng: number;
}

export interface DataSet {
  labels: string[];
  datasets: [{ values: number[] }];
}

export interface EventService {
  signup(user: User): Promise<boolean>;
  login(email: string, password: string): Promise<Session | null>;
  addEvent(event: Event): Promise<Event | false>;
  getEntertainers(): Promise<Entertainer[]>;
  getEvents(entertainerId?: string): Promise<Event[]>;
}
