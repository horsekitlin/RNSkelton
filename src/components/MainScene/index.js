import React from 'react';
import Home from '../HomeScene';

class MainScene extends React.Component {
  render() {
    const {currentPage} = this.props.route;
    switch(currentPage) {
      case 'Home':
      default:
        return <Home />;
    }
  }
}

export default MainScene;
