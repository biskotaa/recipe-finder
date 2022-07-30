export interface ICharacterAPI {
  info: Info;
  results: ICharacter[];
}

interface Info {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

export interface ICharacter {
  id: number;
  name: string;
  image: string;
  species: string;
  status: Status;
  url?: string;
  origin: Origin;
  location: Location;
  gender?: string;
}

enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  unknown = 'unknown',
}

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}
