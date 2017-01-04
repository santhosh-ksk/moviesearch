import React from 'react';
import ReactDOM from 'react-dom';
import TitleBar from './app/Header.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from './app/Search.jsx';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TitleBar />
          <SearchBar />
        </div>
      </MuiThemeProvider>
    );
  }
};


ReactDOM.render(<App />, document.getElementById('content'));
