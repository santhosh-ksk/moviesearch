import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Request from 'superagent'

const style = {
  margin: 12,
};
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
  let url="http://www.omdbapi.com/?s="+this.state.value;
  Request
    .get(url)
    .end(function(err,result){
      console.log(result.body);
    });

  }

  render() {
    return (
    <div>
        <TextField
        hintText="Type Movie Name Here"
        value={this.state.value} onChange={this.handleChange}
       />
      <RaisedButton label="Search" primary={true} style={style} onClick={this.handleSubmit}/>
      </div>

    );
  }
}




export default SearchBar;
