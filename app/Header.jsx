import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router';

export default class TitleBar extends React.Component {
  render() {
   return (
     <AppBar title="MovieFinder" />
   );
  }
}
