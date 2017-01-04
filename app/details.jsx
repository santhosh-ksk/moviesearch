import React from 'react';
import ajax from 'superagent';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
class Details extends React.Component {
constructor(props) {
   super(props);
this.state = {
   Title:"",
   Year: "",
   Rated:"",
   Genre:"",
   Director:"",
   Writer:"",
   Actors:"",
   Poster:"",
   Plot:"",
   Language:"",
   Country:""
 };
 }  ajaxCall()
 {
     let url =`http://www.omdbapi.com/?i=${this.props.params.value}&y=&plot=short&r=json`;
     ajax.get(url).end((error, res) => {
        this.setState({
          Title:res.body.Title,
          Year: res.body.Year,
          Rated:res.body.Rated,
          Genre:res.body.Genre,
          Director:res.body.Director,
          Writer:res.body.Writer,
          Actors:res.body.Actors,
          Poster:res.body.Poster,
          Plot:res.body.Plot,
          Language:res.body.Language,
          Country:res.body.Country,
      });
    });
   }  render() {
 this.ajaxCall();
   return (
     <div>
     <AppBar
       title="MovieFinder"
     />
     <section>
     <center>{<img src={this.state.Poster} />}</center>
     <h1>Title : {this.state.Title}</h1>
     <h3>Year : {this.state.Year}</h3>
     <h3>Rated : {this.state.Rated}</h3>
     <h3>Genre : {this.state.Genre}</h3>
     <h3>Director : {this.state.Director}</h3>
     <h3>Writer : {this.state.Writer}</h3>
     <h3>Actors : {this.state.Actors}</h3>
     <h3>Plot : {this.state.Plot}</h3>
     <h3>Language :{this.state.Language}</h3>
     <h3>Country : {this.state.Country}</h3>
     </section>
       <Link to="/"><RaisedButton label="Go Back" primary={true} /></Link>
     </div>
   );
 }
}export default Details;
