export interface ILocationAPI {
  info: Info;
  results: ILocation[];
}

interface Info {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

export interface ILocation {
  id: number;
  name: string;
  dimension: string;
  residents: string[];
  url: string;
  type: string;
  created?: string;
}
