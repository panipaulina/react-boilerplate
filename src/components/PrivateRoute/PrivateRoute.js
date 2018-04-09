import React, { Component } from 'react';

export class PrivateRoute extends Component {
  // handle check if user is logged in or out to render proper content

  componentDidMount() {
    console.log(this.props);
  }
  
  render() {
    return <this.props.component {...this.props} />;
  }
}

export default PrivateRoute;