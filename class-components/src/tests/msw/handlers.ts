import { HttpResponse, http } from 'msw';

import json from './arcanine.json';

export const handlers = [
  http.get('*/cards*', ({ request }) => {
    const url = new URL(request.url);
    console.log('request', request.url);

    const name = url.searchParams.get('name');
    // const page = url.searchParams.get('page');
    // const pageSize = url.searchParams.get('pageSize');
    // const search = url.searchParams.get('search');

    if (name === 'arcanine') {
      return HttpResponse.json(json);
    }

    return HttpResponse.json(json);
  }),
];
