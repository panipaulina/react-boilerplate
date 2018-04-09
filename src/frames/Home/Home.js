import React, { Component } from 'react';

import { Sidebar } from '../../components/Sidebar';
import { SiteContent } from './SiteContent';

export class Home extends Component {
  // handle responsiveness

  render() {
    return (
      <div>
        <Sidebar />
        <SiteContent />
      </div>
    );
  }
}

export default Home;