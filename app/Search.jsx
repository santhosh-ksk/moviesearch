import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ajax from 'superagent';
import {Pagination, Image} from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Link} from 'react-router';
import Details from './details.jsx';
import AppBar from 'material-ui/AppBar';


const style = {
    margin: 12
};

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mList: null,
            value: '',
            items: 0,
            search: false,
            currentPage:0,
            results:0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.ajaxCall = this.ajaxCall.bind(this);
    }

    handleChange(event) {
        this.setState({
        value: event.target.value,
        currentPage: 1
        });
    }

    ajaxCall()
    {
        let url = "http://www.omdbapi.com/?s=" + this.state.value + "&page=" + this.state.currentPage;
        ajax.get(url).end((error, response) => {
            if (response) {
                console.log(response.body);
                let movies = response.body.Search;
                this.setState({search: true, mList: movies, items: movies.length, results:response.body.totalResults,});

            } else {
                console.log('There was an error fetching from API', error);
            }
        });

    }
    handleClick(event) {
      let page=event.currentTarget.dataset.id;
      this.setState({
        currentPage:page
      });
      this.ajaxCall();
    }


    render() {
        let isSearch = this.state.search;
        let content = null;
        if (isSearch) {
            content = <div>
                {this.state.mList.map((details, i) => (
                    <section>
                       <Link to="/details">
                        <Image src={details.Poster}/>
                        <h3>Title: {details.Title}</h3>
                        </Link>
                    </section>
                ))}
            </div>
   var pages=0
   if(this.state.results>100)
   {
     pages=10
   }
   else {
     pages=Math.ceil(this.state.results/10)
   }
   var pagination=[]
   for(var i=1;i<=pages;i++)
   {
     pagination.push(<RaisedButton label={i}  key={i} data-id={i} onClick={this.handleClick}/>)
   }
        } else {
            content = null;
        }
        return (
            <div>
             <AppBar
              title="MovieFinder"
             />
                <TextField hintText="Type Movie Name Here" value={this.state.value} onChange={this.handleChange}/>
                <RaisedButton label="Search" primary={true} style={style} onClick={this.ajaxCall}/>
                {content}
                {pagination}
            </div>
        );
    }
}

export default SearchBar;
