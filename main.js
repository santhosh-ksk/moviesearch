import React from 'react';
import ReactDOM from 'react-dom';
import TitleBar from './app/Header.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from './app/Search.jsx';
import {Router,Route,IndexRoute ,hashHistory} from 'react-router';
import Details from './app/details.jsx';

const App = () => (
 <MuiThemeProvider>
 <Router history={hashHistory}>
   <Route path="/" component={TitleBar}/>
   <Route path="/details" component={Details}/>
 </Router>
 </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('content'));
