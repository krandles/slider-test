import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <h3>DAN&nbsp;&nbsp;MCMAHON</h3>
        </div>
        <div className="header-right">
          <h3>JOURNAL</h3>
          <h3>SERIES</h3>
        </div>
      </div>
    );
  };
};

export default Header;