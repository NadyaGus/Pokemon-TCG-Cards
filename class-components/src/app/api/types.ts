export interface Pokemon {
  hp: string;
  id: string;
  images: { large: string; small: string };
  name: string;
  set: {
    name: string;
    series: string;
  };
  subtypes: string[];
  supertype: string;
  types: string[];
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

export interface QueryString {
  page: null | string;
  pageSize: null | string;
  search: null | string;
}
