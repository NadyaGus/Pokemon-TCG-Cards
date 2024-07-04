import { Component, type ReactNode } from 'react';

import { SearchPage } from '@/pages/main-page';

export class App extends Component {
  render(): ReactNode {
    return (
      <div>
        <SearchPage />
      </div>
    );
  }
}
