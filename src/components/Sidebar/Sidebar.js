import React, { Component } from 'react';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ width: 200, height: '100vh', backgroundColor: 'lightblue' }}>
        <ul>
          <li>Link1</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;