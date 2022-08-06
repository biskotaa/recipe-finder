export interface IEpisodeAPI {
  info: Info;
  results: IEpisode[];
}

interface Info {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created?: string;
}
