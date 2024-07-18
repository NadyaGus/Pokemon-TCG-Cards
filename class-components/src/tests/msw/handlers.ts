import { HttpResponse, http } from 'msw';

import json from './arcanine.json';

export const handlers = [
  http.get('*/cards/gym2-1*', () => {
    return HttpResponse.json(json.data.find((card) => card.id === 'gym2-1'));
  }),
  http.get('*/cards*', ({ request }) => {
    const url = new URL(request.url);

    const name = url.searchParams.get('name');
    const page = url.searchParams.get('page');
    const pageSize = url.searchParams.get('pageSize');
    const search = url.searchParams.get('search');

    if (name === 'arcanine' && page === '1' && pageSize === '20' && search === '') {
      return HttpResponse.json(json);
    }

    return HttpResponse.json(json);
  }),
];
