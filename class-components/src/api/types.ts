export interface Pokemon {
  hp: string;
  id: string;
  images: { large: string; small: string };
  name: string;
  releaseDate: string;
  set: {
    name: string;
    series: string;
  };
  subtypes: string[];
  supertype: string;
  types: string[];
  updatedAt: string;
}

export interface ResponseData {
  data: Pokemon[];
  page: number;
  pageSize: number;
  totalCount: number;
}

export interface ResponseDataCard {
  data: Pokemon;
}
