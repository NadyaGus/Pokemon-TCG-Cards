import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get('/cards', ({ request }) => {
    const url = new URL(request.url);
    const name = url.searchParams.get('name');

    if (name === 'arcanine') {
      return HttpResponse.json({ cards: [require('../msw/arcanine.json')] });
    }

    return HttpResponse.json({ data: [] });
  }),
];
